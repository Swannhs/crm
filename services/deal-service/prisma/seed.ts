import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Starting database seeding...');

  // Create default pipeline
  const defaultPipeline = await prisma.pipeline.upsert({
    where: { id: 'default-pipeline' },
    update: {},
    create: {
      id: 'default-pipeline',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3', // Demo org
      name: 'Default Sales Pipeline',
      description: 'Standard sales process for all deals',
      isActive: true,
      stages: JSON.stringify([
        { id: 'prospect', name: 'Prospect', order: 1, color: '#6B7280' },
        { id: 'qualification', name: 'Qualification', order: 2, color: '#3B82F6' },
        { id: 'proposal', name: 'Proposal', order: 3, color: '#8B5CF6' },
        { id: 'negotiation', name: 'Negotiation', order: 4, color: '#F59E0B' },
        { id: 'closed_won', name: 'Closed Won', order: 5, color: '#10B981' },
        { id: 'closed_lost', name: 'Closed Lost', order: 6, color: '#EF4444' }
      ])
    }
  });

  console.log('✅ Created default pipeline:', defaultPipeline.name);

  // Create sample contacts
  const contact1 = await prisma.contact.upsert({
    where: { id: 'sample-contact-1' },
    update: {},
    create: {
      id: 'sample-contact-1',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1-555-0101',
      title: 'CEO'
    }
  });

  const contact2 = await prisma.contact.upsert({
    where: { id: 'sample-contact-2' },
    update: {},
    create: {
      id: 'sample-contact-2',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@acme.com',
      phone: '+1-555-0102',
      title: 'VP of Sales'
    }
  });

  console.log('✅ Created sample contacts');

  // Create sample companies
  const company1 = await prisma.company.upsert({
    where: { id: 'sample-company-1' },
    update: {},
    create: {
      id: 'sample-company-1',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      name: 'Acme Corporation',
      website: 'https://acme.com',
      industry: 'Technology',
      size: '50-200'
    }
  });

  const company2 = await prisma.company.upsert({
    where: { id: 'sample-company-2' },
    update: {},
    create: {
      id: 'sample-company-2',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      name: 'Global Industries',
      website: 'https://globalindustries.com',
      industry: 'Manufacturing',
      size: '200-500'
    }
  });

  console.log('✅ Created sample companies');

  // Create sample user (demo user)
  const demoUser = await prisma.user.upsert({
    where: { id: 'demo-user-id' },
    update: {},
    create: {
      id: 'demo-user-id',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      email: 'demo@mymanager.com',
      name: 'Demo User'
    }
  });

  console.log('✅ Created demo user');

  // Create sample deals
  const deal1 = await prisma.deal.upsert({
    where: { id: 'sample-deal-1' },
    update: {},
    create: {
      id: 'sample-deal-1',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      name: 'Enterprise License Deal',
      description: 'Annual enterprise license for Acme Corporation',
      amount: 50000,
      currency: 'USD',
      stage: 'proposal',
      probability: 50,
      expectedCloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      ownerId: demoUser.id,
      contactId: contact1.id,
      companyId: company1.id,
      pipelineId: defaultPipeline.id,
      source: 'inbound',
      priority: 'high',
      tags: ['enterprise', 'annual', 'hot']
    }
  });

  const deal2 = await prisma.deal.upsert({
    where: { id: 'sample-deal-2' },
    update: {},
    create: {
      id: 'sample-deal-2',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      name: 'SMB Package - Global Industries',
      description: '6-month SMB package with support',
      amount: 15000,
      currency: 'USD',
      stage: 'negotiation',
      probability: 75,
      expectedCloseDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      ownerId: demoUser.id,
      contactId: contact2.id,
      companyId: company2.id,
      pipelineId: defaultPipeline.id,
      source: 'referral',
      priority: 'medium',
      tags: ['smb', 'semi-annual']
    }
  });

  const deal3 = await prisma.deal.upsert({
    where: { id: 'sample-deal-3' },
    update: {},
    create: {
      id: 'sample-deal-3',
      orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
      name: 'Startup Plan - TechStart Inc',
      description: 'Monthly startup plan',
      amount: 2500,
      currency: 'USD',
      stage: 'qualification',
      probability: 25,
      expectedCloseDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days from now
      ownerId: demoUser.id,
      pipelineId: defaultPipeline.id,
      source: 'website',
      priority: 'low',
      tags: ['startup', 'monthly']
    }
  });

  console.log('✅ Created sample deals');

  // Create sample activities
  await prisma.activity.createMany({
    data: [
      {
        id: 'activity-1',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        type: 'email',
        subject: 'Initial outreach',
        content: 'Sent introductory email to John Doe',
        dealId: deal1.id,
        ownerId: demoUser.id,
        completed: true,
        completedAt: new Date()
      },
      {
        id: 'activity-2',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        type: 'call',
        subject: 'Discovery call scheduled',
        content: 'Scheduled 30-min discovery call for next week',
        dealId: deal1.id,
        ownerId: demoUser.id,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        completed: false
      },
      {
        id: 'activity-3',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        type: 'meeting',
        subject: 'Product demo',
        content: 'Conducted product demo with Jane Smith',
        dealId: deal2.id,
        ownerId: demoUser.id,
        completed: true,
        completedAt: new Date()
      }
    ]
  });

  console.log('✅ Created sample activities');

  // Create sample notes
  await prisma.note.createMany({
    data: [
      {
        id: 'note-1',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        content: 'Very interested in enterprise features. Budget approved for Q1.',
        dealId: deal1.id,
        ownerId: demoUser.id,
        isPinned: true
      },
      {
        id: 'note-2',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        content: 'Price sensitivity detected. May need to offer discount.',
        dealId: deal2.id,
        ownerId: demoUser.id,
        isPinned: false
      }
    ]
  });

  console.log('✅ Created sample notes');

  // Create sample tasks
  await prisma.task.createMany({
    data: [
      {
        id: 'task-1',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        title: 'Send proposal document',
        description: 'Prepare and send detailed proposal with pricing',
        dealId: deal1.id,
        ownerId: demoUser.id,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        priority: 'high',
        status: 'pending'
      },
      {
        id: 'task-2',
        orgId: '84e0b41b-dff4-42fe-bb73-b5abc8298ba3',
        title: 'Follow up on contract terms',
        description: 'Review contract terms with legal team',
        dealId: deal2.id,
        ownerId: demoUser.id,
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        priority: 'medium',
        status: 'in_progress'
      }
    ]
  });

  console.log('✅ Created sample tasks');

  console.log('\n🎉 Database seeding completed successfully!');
  console.log('\n📊 Summary:');
  console.log('   - 1 Pipeline');
  console.log('   - 2 Contacts');
  console.log('   - 2 Companies');
  console.log('   - 1 User');
  console.log('   - 3 Deals (total value: $67,500)');
  console.log('   - 3 Activities');
  console.log('   - 2 Notes');
  console.log('   - 2 Tasks');
}

seed()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
