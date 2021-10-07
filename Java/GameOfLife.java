class Solution {
    final static int[][] directions = {{-1,-1}, {-1,0}, {-1, 1}, {0,-1}, {0,1}, {1,-1}, {1,0}, {1,1}};
    public void gameOfLife(int[][] board) {
        int rows = board.length;
        int columns = board[0].length;
        for(int r = 0; r < rows; r++){
            for(int c = 0; c < columns; c++){
                //System.out.println(board[r][c]);
                int aliveNeigh = countAliveNeigh(board, r, c);
                //System.out.println(aliveNeigh);
                if(board[r][c] == 0 && aliveNeigh == 3)
                    board[r][c] = 2;
                if(board[r][c] == 1 && (aliveNeigh < 2 || aliveNeigh > 3))
                    board[r][c] = 3;
                
            }
        }
        updateBoard(board);
    }
    private void updateBoard(int[][] board){
        for(int r = 0; r < board.length; r++){
            for(int c = 0; c < board[0].length; c++){
                if(board[r][c] == 3) board[r][c] = 0;
                if(board[r][c] == 2) board[r][c] = 1;
            }
        }
    }
    private int countAliveNeigh(int[][] board, int r, int c){
        int res = 0;
        for(int[] direction : directions){
            if((r + direction[0] >= 0) && (r + direction[0] < board.length) &&
               (c + direction[1] >= 0) && (c + direction[1] < board[0].length)){
                if(board[r + direction[0]][c + direction[1]] == 1 ||
                   board[r + direction[0]][c + direction[1]] == 3){
                    res++;
                }
            }
        }
        return res;
    }
}