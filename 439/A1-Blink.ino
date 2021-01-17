// stores the values for the pins that the LEDs are plugged into in the arduino 
// RED = 12, WHITE = 10, BLUE = 8, YELLOW = 7, GREEN = 5
int pins[] = {12,10,8,7,5};
// variable that stores the number of pins being used on the breadboard 
int pinsUsed = 5;



// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 12 for the RED LED
  pinMode(12, OUTPUT);
  // initialize digital pin 10 for the WHITE LED
  pinMode(10, OUTPUT);
  // initialize digital pin 8 for the RED LED
  pinMode(8, OUTPUT);
  // initialize digital pin 7 for the YELLOW LED
  pinMode(7, OUTPUT); 
  // initialize digital pin 5 for the GREEN LED
  pinMode(5, OUTPUT);
}

//Goes through the LED and lights them all up in an animatred fashion from RED to GREEN
void upTheScale() {
  //Loops through the LED from RED to GREEN
  for(int i = 0; i <  sizeof(pins); i++){
    //Turns on the LED that is selected in the loop
    digitalWrite(pins[i], HIGH); 
    //Stops program for half a second to give an animated effect
    delay(500);
  }
}
//A function that turns all LEDs to on in an animated fashion from the GREEN to RED
void downTheScale() {
  //Loops through the LEDS from GREEN to RED
  for(int i = pinsUsed - 1; i >= 0; i--){
    //Turns off the LED that is selected in the loop
    digitalWrite(pins[i], LOW);
    //Stops program for half a second to give an animated effect
    delay(500);
  }
}

//A function that turns all LEDs on
void allOn(){
  //Loops through every LED on the board
  for(int i = 0; i < sizeof(pins); i++){
    //Turns the selected LED on
    digitalWrite(pins[i],HIGH);
  }
}
//A function that turns all LEDs off
void allOff() {
  //Loops through every LED on the board
  for(int i = 0; i <  sizeof(pins); i++){
    //Stops program for half a second to give an animated effect
    digitalWrite(pins[i],LOW);
  }
}
// the loop function runs over and over again forever
void loop() {
  //calls the up the scale funciton, to make it appear as if they are turning on one by one
  upTheScale();
  //calls the down the scale function, to make it appear as if they are turning off one by one
  downTheScale();
  //make the code inside repeat 5 times
  for(int i=0;i < 5; i++){
    //Turns ass the lights on
    allOn();
    //Stops program for half a second, for an animated effect
    delay(500);
    //Turns all the lights off
    allOff();
    //Stops program for half a second for an animated effect 
    delay(500);
  }
}
