fun isPalindrome(string : String):Boolean{
       println(string)
       if(string.length <= 1) return true
       else{
           return (string.get(0).equals(string.get(string.length - 1))) && isPalindrome(string.slice(1..string.length - 2))
       }
   }