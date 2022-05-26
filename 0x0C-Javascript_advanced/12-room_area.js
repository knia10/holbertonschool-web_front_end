let roomDimensions = {width:50, length:100, getArea: function() {return this.width * this.length;}};
let getArea = roomDimensions.getArea;
let boundGetArea = getArea.bind(roomDimensions);
