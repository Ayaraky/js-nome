let cor;
let circuloX;
let circuloY;


function setup() {
  createCanvas(400, 400);

  background(color(random(100, 120), 0, 0));
  cor= color (random(0, 255), random(0, 255), random(0, 255))
circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}


function draw() {
  
  
  ellipse(circuloX, circuloY,50, 40);
  
  ellipse(circuloX[0], circuloY[0], 50)
  ellipse(circuloX[1], circuloY[1], 50)
  
  
for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
    
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  if (mouseIsPressed){
  cor= color (random(0, 255), random(0, 255), random(0, 255), random(0, 100))}
  fill(cor)
  
}}