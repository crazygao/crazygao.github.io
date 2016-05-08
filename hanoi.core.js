

var gameconfig = {
    delay: 200, // milliseconds
};

var viewconfig = {

};

var hanoiconfig = {

};




function GameBoard(game_config) {
    if (!game_config) game_config = hanoiconfig;
    this.Towers; // an array of Tower
    this.Disks = new Disks();
}


