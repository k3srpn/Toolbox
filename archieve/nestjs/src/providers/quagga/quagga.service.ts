import Quagga from '@ericblade/quagga2';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuaggaService {
  async decode(buffer: Buffer) {
    const signature = buffer.toString('hex', 0, 4).toUpperCase();
    const mimeType = this.getMimeType(signature);
    const dataurl = `data:${mimeType};base64,${buffer.toString('base64')}`;
    const barcode = await Quagga.decodeSingle({
      decoder: {
        readers: ['code_128_reader'],
      },
      locate: true,
      src: dataurl,
    });

    return barcode?.codeResult?.code || null;
  }

  private getMimeType(signature: string) {
    switch (signature) {
      case '89504E47':
        return 'image/png';
      case 'FFD8FFDB':
      case 'FFD8FFE0':
        return 'image/jpeg';
      default:
        return null;
    }
  }
}
