// RGB LED 핀 정의
const int redPin = 9;    // 빨간색 LED 핀
const int greenPin = 10; // 초록색 LED 핀
const int bluePin = 11;  // 파란색 LED 핀

// 스피커 핀 정의
const int speakerPin = 8;

// 타이머 변수
unsigned long previousMillis = 0;
const long interval = 3000; // 3초 간격

// LED 색상 상태 변수
int currentColor = 0;

void setup() {
  // RGB LED 핀을 출력으로 설정
  pinMode(redPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
  pinMode(bluePin, OUTPUT);

  // 스피커 핀을 출력으로 설정
  pinMode(speakerPin, OUTPUT);

  // 초기 LED 상태
  setColor(255, 0, 0); // 빨강
}

void loop() {
  // 멜로디 재생
  playMelody();

  // 현재 시간 확인
  unsigned long currentMillis = millis();

  // 3초마다 색상 변경
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    changeColor();
  }
}

// 멜로디 재생 함수
void playMelody() {
  tone(speakerPin, 262, 500); // 도 음 (262 Hz), 0.5초
  delay(500);
  tone(speakerPin, 294, 500); // 레 음 (294 Hz), 0.5초
  delay(500);
  tone(speakerPin, 330, 500); // 미 음 (330 Hz), 0.5초
  delay(500);
}

// LED 색상 설정 함수
void setColor(int red, int green, int blue) {
  analogWrite(redPin, red);
  analogWrite(greenPin, green);
  analogWrite(bluePin, blue);
}

// 색상 변경 함수
void changeColor() {
  if (currentColor == 0) {
    setColor(0, 0, 255); // 파랑
    currentColor = 1;
  } else if (currentColor == 1) {
    setColor(0, 255, 0); // 초록
    currentColor = 2;
  } else {
    setColor(255, 0, 0); // 빨강
    currentColor = 0;
  }
}