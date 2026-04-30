import { ContactsService } from './src/modules/contacts/contacts.service.js';
import { PrismaService } from './src/common/prisma/prisma.service.js';
import { OdooClientService } from './src/modules/odoo-base/odoo-client.service.js';

async function run() {
  const odooClient = {
    execute: async (model: string, method: string, args: any[]) => {
      await new Promise(r => setTimeout(r, 50)); // simulate latency
      return Math.floor(Math.random() * 100000);
    }
  } as any;

  const prisma = {
    contactMap: {
      upsert: async () => {
        await new Promise(r => setTimeout(r, 10)); // simulate latency
        return {};
      }
    }
  } as any;

  const service = new ContactsService(odooClient, prisma);

  // Create a large CSV
  let csv = "Name,Email,Phone,Mobile,IsCompany,Street,City,VAT\n";
  for (let i = 0; i < 200; i++) {
    csv += `Test ${i},test${i}@example.com,123456789,123456789,false,Test Street,Test City,123456\n`;
  }

  const file = {
    buffer: Buffer.from(csv)
  } as any;

  const start = Date.now();
  await service.import(file);
  const end = Date.now();

  console.log(`Import took ${end - start}ms`);
}

run().catch(console.error);
