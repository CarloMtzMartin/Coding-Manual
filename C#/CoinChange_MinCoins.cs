using System;
					
public class Program
{
	public static void Main()
	{
		Console.WriteLine(coinChange(new [] {1,2,5}, 11));
	}
	
	public static int coinChange(int[] coins, int amount) {
    if (amount < 1) return 0;
    return coinChange(coins, amount, new int[amount]);
  }

  private static int coinChange(int[] coins, int rem, int[] count) {
	  Console.WriteLine(rem);
    if (rem < 0) return -1;
    if (rem == 0) return 0;
    if (count[rem - 1] != 0) return count[rem - 1];
    int min = Int32.MaxValue;
    foreach (int coin in coins) {
		Console.WriteLine("Coin: " + coin + " REM: " + rem);
      int res = coinChange(coins, rem - coin, count);
      if (res >= 0 && res < min)
        min = 1 + res;
    }
    count[rem - 1] = (min == Int32.MaxValue) ? -1 : min;
    return count[rem - 1];
  }
}