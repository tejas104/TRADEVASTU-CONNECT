import { MongoClient } from 'mongodb';

async function testMongoDB() {
  const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
  const dbName = process.env.DB_NAME || 'tradevastu';

  console.log('🔍 Testing MongoDB connection...');
  console.log(`📍 URL: ${mongoUrl}`);
  console.log(`📍 Database: ${dbName}`);

  try {
    const client = new MongoClient(mongoUrl);
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');

    const db = client.db(dbName);

    // Insert test data
    const testMessage = {
      id: 'test-' + Date.now(),
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from debug script',
      createdAt: new Date()
    };

    const result = await db.collection('contact_messages').insertOne(testMessage);
    console.log('✅ Test data inserted:', result.insertedId);

    // Check all data
    const messages = await db.collection('contact_messages').find({}).toArray();
    console.log(`📊 Total messages in database: ${messages.length}`);
    console.log('📋 Messages:', messages);

    await client.close();
    console.log('✅ Test completed successfully!');

  } catch (error) {
    console.error('❌ MongoDB test failed:', error.message);
  }
}

testMongoDB();
