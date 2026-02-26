import { describe, it, expect } from 'vitest';
import { syncSubscriberToBeehiiv } from '../server/db';

describe('Beehiiv Integration', () => {
  it('should have valid Beehiiv credentials configured', () => {
    expect(process.env.BEEHIIV_API_KEY).toBeDefined();
    expect(process.env.BEEHIIV_PUBLICATION_ID).toBeDefined();
    expect(process.env.BEEHIIV_API_KEY).not.toBe('');
    expect(process.env.BEEHIIV_PUBLICATION_ID).not.toBe('');
  });

  it('should successfully sync a test subscriber to Beehiiv', async () => {
    const testEmail = `test+${Date.now()}@hrdlfcoin.com`;
    
    const result = await syncSubscriberToBeehiiv(testEmail);
    
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
    expect(result.data).toBeDefined();
    if (result.success && result.data) {
      expect(result.data.email).toBe(testEmail);
      expect(result.data.id).toMatch(/^sub_/);
    }
  }, 10000); // 10 second timeout for API call
});
