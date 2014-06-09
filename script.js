TicTacToeApp = angular.module("TicTacToeApp", [])

TicTacToeApp.controller("gameCtrl", ["$scope", ($scope) - >

        $scope.movesX = []
        $scope.movesO = []
        turn = 0
        $scope.checkboxes = {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
            9: false
        }
        wins = ["123", "321", "132", "213", "312", "231", "456", "654", "645", "546", "564", "465", "789", "987", "978", "879", "897", "798", "159", "951", "915", "519", "591", "195", "357", "753", "735", "537", "573", "375", "147", "741", "714", "417", "471", "174", "258", "852", "825", "528", "582", "285", "369", "963", "936", "639", "693", "396"]


        $scope.addMove = (position) - >
        turn++
        if $scope.checkboxes[position] == false
        if turn % 2 == 0
        $scope.movesX.push(position)
        $scope.player = "X"
        $scope.nextPlayer = "O"
        console.log($scope.player, $scope.movesX)
        $scope.checkboxes[position] = $scope.player
        else
            $scope.movesO.push(position)
        $scope.player = "O"
        $scope.nextPlayer = "X"
        console.log($scope.player, $scope.movesO)
        $scope.marker = true
        $scope.checkboxes[position] = $scope.player
        if turn >= 5
        $scope.checkWinner()
        else
            alert("That box has been played, choose again")



            $scope.checkWinner = - >
        for i in wins
        if i == $scope.movesX.join("")
        alert("X Player won!")
        $scope.newGame()
        else if i == $scope.movesO.join("")
        alert("O player won!")
        $scope.newGame()
        else
            alert("You either tied or keep playing")
        # this doesn 't work if you take more than 5 turns to win!
       
   $scope.newGame = ->
      $scope.movesX = []
      $scope.movesO = []
      turn = null
      $scope.player = nil
      $scope.checkboxes = {1:false, 2: false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false}

])