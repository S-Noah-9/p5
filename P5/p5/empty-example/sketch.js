function setup() {
 createCanvas (500,500);
}

function draw() {
  background("#0035C4");
  fill("#0089DA");
  stroke("#B200FF");
  strokeWeight(2);
  ellipse(mouseX,40,40,40);
  rect(20,mouseY,40,40);
  ellipse(mouseX,460,40,40);
  rect(400,mouseY,40,40);
  rect(mouseX,150,40,40);
}