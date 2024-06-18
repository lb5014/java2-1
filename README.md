# 지영준 202130230  

## 6월 14일 강의내용  
1교시 13장
1. 입출력 스트림 (I/O Streams)  
입출력 스트림은 데이터를 읽고 쓰기 위한 일련의 추상화입니다. 이 스트림은 데이터의 흐름을 의미하며, 데이터 소스(입력)나 데이터 대상(출력)을 추상화하여 프로그래머가 쉽게 데이터를 처리할 수 있도록 합니다.

종류

1.	입력 스트림 (Input Stream):  
	*	입력 스트림은 데이터를 읽어들이는 데 사용됩니다. 데이터를 입력받는 소스가 파일일 수도 있고, 키보드, 네트워크 소켓 등이 될 수도 있습니다.  
	*	예: FileInputStream, BufferedInputStream, DataInputStream 등.  
2.	출력 스트림 (Output Stream):  
	*	출력 스트림은 데이터를 출력하는 데 사용됩니다. 데이터를 출력하는 대상이 파일일 수도 있고, 화면, 네트워크 소켓 등이 될 수도 있습니다.  
	*	예: FileOutputStream, BufferedOutputStream, DataOutputStream 등.  

2. 스트림 클래스 계층 구조 (Java 예시)  
* Java에서는 입출력 스트림을 위한 다양한 클래스가 있습니다. 이들은 크게 InputStream과 OutputStream 클래스를 상속받습니다.

    * InputStream: 데이터를 바이트 단위로 읽어들이기 위한 기본 클래스입니다. 주요 메서드는 read()입니다.  
    * FileInputStream: 파일로부터 데이터를 읽어옵니다.  
    * BufferedInputStream: 데이터를 버퍼링하여 효율적으로 읽어옵니다.  
    * DataInputStream: 기본 데이터 타입을 읽을 수 있습니다.  
    * OutputStream: 데이터를 바이트 단위로 쓰기 위한 기본 클래스입니다. 주요 메서드는 write()입니다.  
    * FileOutputStream: 파일로 데이터를 씁니다.  
    * BufferedOutputStream: 데이터를 버퍼링하여 효율적으로 씁니다.  
    * DataOutputStream: 기본 데이터 타입을 쓸 수 있습니다.  

3. 문자 스트림 (Character Streams)  
* 바이트 스트림이 아닌 문자 데이터를 처리하기 위해 Java는 문자 스트림 클래스를 제공합니다. 

	* Reader: 문자 입력 스트림의 추상 클래스입니다.
	* FileReader: 파일로부터 문자를 읽어옵니다.
	* BufferedReader: 버퍼링하여 문자를 읽어옵니다.
	* InputStreamReader: 바이트 스트림을 문자 스트림으로 변환합니다.
	* Writer: 문자 출력 스트림의 추상 클래스입니다.
	* FileWriter: 파일에 문자를 씁니다.
	* BufferedWriter: 버퍼링하여 문자를 씁니다.
	* OutputStreamWriter: 바이트 스트림을 문자 스트림으로 변환합니다.

4. 파일 입출력 (File I/O)  
* 파일 입출력은 파일을 읽고 쓰는 과정을 말합니다. 이는 데이터를 영구적으로 저장하거나 불러오는 데 사용됩니다. 파일 입출력은 대부분의 프로그래밍 언어에서 기본적으로 제공하는 기능입니다.  

1. 기본 파일 입출력 작업  

	1.	파일 열기:
	    * 파일을 열어야 데이터를 읽거나 쓸 수 있습니다. 파일 열기 모드는 읽기, 쓰기, 추가 등이 있습니다.
	    * 예: open() 함수 (Python), FileInputStream / FileOutputStream 클래스 (Java).
	2.	파일 읽기/쓰기:
	    * 파일의 데이터를 읽거나 쓰는 작업입니다. 데이터를 효율적으로 처리하기 위해 버퍼링을 사용하기도 합니다.
	    * 예: read(), write() 메서드 (Python), read() / write() 메서드 (Java).
	3.	파일 닫기:
	    * 작업이 끝난 후에는 반드시 파일을 닫아야 합니다. 그렇지 않으면 메모리 누수나 파일 손상 등의 문제가 발생할 수 있습니다.
	    * 예: close() 메서드 (Python, Java).
```java
import java.io.*;

public class FileIOExample {
    public static void main(String[] args) {
        // 파일 쓰기
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, world!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 파일 읽기
        try (FileReader reader = new FileReader("example.txt");
             BufferedReader br = new BufferedReader(reader)) {
            String content = br.readLine();
            
            System.out.println(content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```  
5. 고급 파일 입출력 기술  

* 버퍼링 (Buffering)  
버퍼링은 입출력 속도를 높이기 위해 사용되는 기술입니다. 데이터를 직접 읽고 쓰는 대신 버퍼(임시 저장 공간)를 사용하여 데이터를 한 번에 처리합니다. 이를 통해 디스크 I/O의 빈도를 줄이고 성능을 향상시킬 수 있습니다.

* 파일 포인터 (File Pointers)  
파일 포인터는 현재 파일에서 읽거나 쓸 위치를 나타냅니다. 파일 포인터를 이동시켜 특정 위치에서부터 읽거나 쓸 수 있습니다.

* 랜덤 액세스 파일 (Random Access File)  
랜덤 액세스 파일을 사용하면 파일의 특정 위치로 이동하여 데이터를 읽거나 쓸 수 있습니다. 이는 대규모 파일에서 특정 데이터를 효율적으로 처리하는 데 유용합니다.  
```java
import java.io.*;

public class RandomAccessFileExample {
    public static void main(String[] args) {
        try (RandomAccessFile raf = new RandomAccessFile("example.txt", "rw")) {
            // 파일의 5번째 바이트로 이동
            raf.seek(5);
            raf.write("world".getBytes());

            // 파일의 처음으로 이동
            raf.seek(0);
            String content = raf.readLine();
            System.out.println(content);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```  
## 6월 7일 강의내용
1교시 11장  
1. Swing 컴포넌트 그리기
Swing은 Java의 표준 GUI 툴킷으로, 그래픽 사용자 인터페이스를 만드는 데 사용됩니다. Swing 컴포넌트는 AWT(Abstract Window Toolkit) 컴포넌트와 달리 더 풍부한 기능과 유연성을 제공합니다. 다음은 Swing 컴포넌트를 만드는 기본적인 예제입니다.

```java
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JPanel;

public class SwingExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Swing Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(300, 200);

        JPanel panel = new JPanel();
        JButton button = new JButton("Click Me!");

        panel.add(button);
        frame.add(panel);
        frame.setVisible(true);
    }
}
```
2. 이미지 그리기  
Swing에서 이미지를 그리기 위해서는 Image 객체를 사용하고, paintComponent() 메서드에서 Graphics 객체의 drawImage() 메서드를 호출하면 됩니다. 다음은 이미지를 그리는 예제입니다.  

```java  
import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class ImageDrawingExample extends JPanel {
    private Image image;

    public ImageDrawingExample() {
        try {
            image = ImageIO.read(new File("path/to/image.jpg"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        if (image != null) {
            g.drawImage(image, 0, 0, this);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Image Drawing Example");
        ImageDrawingExample panel = new ImageDrawingExample();
        
        frame.add(panel);
        frame.setSize(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```  
3. 도형 그리기와 칠하기  
Graphics 객체를 사용하여 다양한 도형을 그릴 수 있습니다. 예를 들어, 선, 사각형, 원, 다각형 등을 그릴 수 있으며, 이 도형들을 색칠할 수도 있습니다. 다음은 기본적인 도형 그리기와 색칠하기 예제입니다.

```java  
import javax.swing.*;
import java.awt.*;

public class ShapeDrawingExample extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // 색상 설정
        g.setColor(Color.RED);
        // 선 그리기
        g.drawLine(10, 10, 200, 10);

        // 사각형 그리기
        g.drawRect(10, 30, 100, 50);

        // 사각형 색칠하기
        g.setColor(Color.BLUE);
        g.fillRect(120, 30, 100, 50);

        // 원 그리기
        g.setColor(Color.GREEN);
        g.drawOval(10, 100, 100, 100);

        // 원 색칠하기
        g.setColor(Color.MAGENTA);
        g.fillOval(120, 100, 100, 100);

        // 다각형 그리기
        int[] xPoints = {10, 30, 50, 70, 90};
        int[] yPoints = {200, 180, 200, 180, 200};
        g.setColor(Color.ORANGE);
        g.drawPolygon(xPoints, yPoints, 5);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Shape Drawing Example");
        ShapeDrawingExample panel = new ShapeDrawingExample();

        frame.add(panel);
        frame.setSize(300, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```  
4. repaint() 메서드  
repaint() 메서드는 컴포넌트를 다시 그리도록 요청할 때 사용됩니다. 이는 paintComponent() 메서드를 호출하게 하여 그래픽을 업데이트하는 데 사용됩니다. 보통 애니메이션이나 사용자 입력에 따라 화면을 갱신할 때 사용됩니다.

```java  
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class RepaintExample extends JPanel implements ActionListener {
    private int x = 0;
    private Timer timer;

    public RepaintExample() {
        timer = new Timer(30, this);  // 30밀리초마다 actionPerformed 호출
        timer.start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.fillOval(x, 50, 50, 50);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        x += 5;
        if (x > getWidth()) {
            x = 0;
        }
        repaint();  // paintComponent 호출
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Repaint Example");
        RepaintExample panel = new RepaintExample();

        frame.add(panel);
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```  
5. 그래픽 응용  
위의 예제를 확장하여 애니메이션을 구현하거나 사용자 인터페이스를 보다 동적으로 만들 수 있습니다. 예를 들어, 마우스 이벤트나 키보드 이벤트를 처리하여 사용자가 그린 그림을 수정하거나 새로운 도형을 추가할 수 있습니다.
---  
다음은 마우스 클릭을 처리하여 화면에 원을 그리는 간단한 예제입니다.  

```java
import javax.swing.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.ArrayList;
import java.util.List;

public class InteractiveDrawingExample extends JPanel {
    private List<Point> points = new ArrayList<>();

    public InteractiveDrawingExample() {
        addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                points.add(e.getPoint());
                repaint();
            }
        });
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        for (Point point : points) {
            g.fillOval(point.x - 10, point.y - 10, 20, 20);
        }
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Interactive Drawing Example");
        InteractiveDrawingExample panel = new InteractiveDrawingExample();

        frame.add(panel);
        frame.setSize(400, 400);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
```
2교시 12장  
1. 스레드의 기초 개념  
* 스레드는 프로세스 내에서 독립적으로 실행되는 하나의 작업 흐름을 말합니다. 멀티스레딩은 하나의 프로세스 내에서 여러 스레드가 동시에 실행되는 것을 의미합니다. 이는 자원을 효율적으로 사용하고, 사용자 경험을 향상시키며, 복잡한 애플리케이션의 성능을 높이는 데 도움이 됩니다.

2. 자바에서 스레드 생성 방법  
* 자바에서 스레드를 생성하는 주요 방법은 두 가지입니다:  

1. Thread 클래스를 상속받는 방법  
2. Runnable 인터페이스를 구현하는 방법  

Thread 클래스를 상속받는 방법  
Thread 클래스를 상속받아 새로운 스레드를 생성할 수 있습니다. 이 방법에서는  
Thread 클래스의 run() 메서드를 오버라이드하여 스레드가 수행할 작업을 정의합니다.

``` java
class MyThread extends Thread {
    @Override
    public void run() {
        for(int i = 0; i < 5; i++) {
            System.out.println("Thread is running: " + i);
            try {
                Thread.sleep(500); // 0.5초 대기
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start(); // 스레드를 시작
    }
}
```
* Runnable 인터페이스를 구현하는 방법  
Runnable 인터페이스를 구현하는 방법은 클래스가 다른 클래스를 상속받아야 하는 경우  
유용합니다. Runnable 인터페이스의 run() 메서드를 구현한 후, Thread 클래스의   
생성자에 Runnable 객체를 전달하여 스레드를 생성합니다.

```java  
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for(int i = 0; i < 5; i++) {
            System.out.println("Runnable is running: " + i);
            try {
                Thread.sleep(500); // 0.5초 대기
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start(); // 스레드를 시작
    }
}
```
3. 스레드 상태  
* 스레드는 여러 상태를 가질 수 있습니다. 스레드의 주요 상태는 다음과 같습니다:

1. NEW: 스레드가 생성되었지만 아직 시작되지 않은 상태.  
2. RUNNABLE: 스레드가 실행 중이거나 실행될 준비가 된 상태.  
3. BLOCKED: 스레드가 모니터 락을 기다리고 있는 상태.  
4. WAITING: 스레드가 다른 스레드의 특정 동작을 기다리고 있는 상태.  
5. TIMED_WAITING: 지정된 시간 동안 기다리는 상태.  
6. TERMINATED: 스레드가 실행을 완료한 상태.  
4. 스레드 동기화  
멀티스레딩 환경에서 동기화는 중요한 개념입니다. 여러 스레드가 동시에 공유 자원에 접근할 때, 동기화가 필요합니다. 자바에서는 synchronized 키워드를 사용하여 동기화를 구현합니다.

* 메서드 동기화  
메서드 전체를 동기화할 수 있습니다. 이렇게 하면 메서드가 한 번에 하나의 스레드에 의해서만 실행될 수 있습니다.

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizedExample {
    public static void main(String[] args) {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + counter.getCount()); // 결과: 2000
    }
}
```
* 블록 동기화  
메서드 전체를 동기화하는 대신 특정 블록만 동기화할 수도 있습니다. 이렇게 하면 더 세밀하게 제어할 수 있습니다.

```java  
class Counter {
    private int count = 0;

    public void increment() {
        synchronized (this) {
            count++;
        }
    }

    public int getCount() {
        return count;
    }
}

public class SynchronizedBlockExample {
    public static void main(String[] args) {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + counter.getCount()); // 결과: 2000
    }
}
```
5. 스레드 간 통신
스레드 간 통신은 일반적으로 wait(), notify(), notifyAll() 메서드를 사용하여 이루어집니다. 이 메서드들은 Object 클래스에서 제공되며, synchronized 블록 내에서 호출되어야 합니다.

```java  
class SharedResource {
    private int value;
    private boolean available = false;

    public synchronized int get() {
        while (!available) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        available = false;
        notifyAll();
        return value;
    }

    public synchronized void put(int value) {
        while (available) {
            try {
                wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        this.value = value;
        available = true;
        notifyAll();
    }
}

public class ThreadCommunicationExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread producer = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                resource.put(i);
                System.out.println("Produced: " + i);
            }
        });

        Thread consumer = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                int value = resource.get();
                System.out.println("Consumed: " + value);
            }
        });

        producer.start();
        consumer.start();
    }
}
```  
위의 예제는 생산자-소비자 문제를 해결하는 간단한 예제입니다. 생산자는 값을 생성하고, 소비자는 그 값을 소비합니다. wait()와 notifyAll() 메서드를 사용하여 스레드 간의 올바른 동기화를 유지합니다.
## 5월 31일 강의내용
1교시 10장  
1. 스윙의 주요 특징  

    * 플랫폼 독립성: 스윙은 자바로 작성되었기 때문에 운영체제에 독립적입니다. 같은 코드가 Windows, MacOS, Linux 등 다양한 운영체제에서 동일하게 작동합니다.  

    * 경량 컴포넌트: 스윙 컴포넌트는 모두 자바로 구현되어 있어 운영체제의 네이티브 GUI 컴포넌트에 의존하지 않습니다. 따라서 운영체제에 따라 모양과 동작이 일관됩니다.  

    * 확장 가능성: 스윙은 높은 확장성을 제공합니다. 기존 컴포넌트를 확장하거나 새로운 컴포넌트를 작성하여 기능을 추가할 수 있습니다.  

    * 룩앤필(look and feel): 스윙은 다양한 룩앤필을 제공하여 애플리케이션의 외관을 쉽게 변경할 수 있습니다. 기본적으로 제공되는 룩앤필 외에도 커스텀 룩앤필을 적용할 수 있습니다.

## 스윙의 주요 컴포넌트  
스윙은 다양한 GUI 컴포넌트를 제공하며, 이들을 조합하여 복잡한 사용자 인터페이스를 만들 수 있습니다. 주요 컴포넌트는 다음과 같습니다:  

1. JFrame: 윈도우 창을 나타내는 최상위 컨테이너입니다. 애플리케이션의 메인 윈도우로 사용됩니다.  
``` java
JFrame frame = new JFrame("My Application");
frame.setSize(400, 300);
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setVisible(true);
```  
2. JPanel: 다른 컴포넌트들을 그룹화하기 위한 컨테이너입니다. 레이아웃 관리자를 사용하여 내부 컴포넌트들을 배치할 수 있습니다.  
``` java
JPanel panel = new JPanel();
frame.add(panel);
```  
3. JLabel: 텍스트나 이미지를 표시하는 컴포넌트입니다.  
``` java
JLabel label = new JLabel("Hello, World!");
panel.add(label);
```  
4. JButton: 버튼을 나타내는 컴포넌트로, 클릭 이벤트를 처리할 수 있습니다.  
``` java
JButton button = new JButton("Click Me");
panel.add(button);
button.addActionListener(e -> System.out.println("Button Clicked!"));
```  
5. JTextField: 한 줄의 텍스트 입력을 받을 수 있는 컴포넌트입니다.  
``` java
JTextField textField = new JTextField(20);
panel.add(textField);
```  
6. JTextArea: 여러 줄의 텍스트 입력을 받을 수 있는 컴포넌트입니다.  
``` java
JTextArea textArea = new JTextArea(5, 20);
panel.add(new JScrollPane(textArea));
```  
7. JComboBox: 드롭다운 리스트를 나타내는 컴포넌트입니다.  
``` java
String[] items = {"Item 1", "Item 2", "Item 3"};
JComboBox<String> comboBox = new JComboBox<>(items);
panel.add(comboBox);
```  
8. JList: 목록을 나타내는 컴포넌트로, 여러 항목을 선택할 수 있습니다.  
``` java
JList<String> list = new JList<>(items);
panel.add(new JScrollPane(list));
```  
9. JCheckBox: 체크박스를 나타내는 컴포넌트로, 선택 가능 상태를 나타냅니다.  
``` java
JCheckBox checkBox = new JCheckBox("Check Me");
panel.add(checkBox);
```  
10. JRadioButton: 라디오 버튼을 나타내는 컴포넌트로, 여러 옵션 중 하나만 선택할 수 있습니다.  
``` java
JRadioButton radioButton1 = new JRadioButton("Option 1");
JRadioButton radioButton2 = new JRadioButton("Option 2");
ButtonGroup group = new ButtonGroup();
group.add(radioButton1);
group.add(radioButton2);
panel.add(radioButton1);
panel.add(radioButton2);
```  
## 스윙 레이아웃 관리자  
스윙에서는 컴포넌트들을 효과적으로 배치하기 위해 다양한 레이아웃 관리자를 제공합니다. 주요 레이아웃 관리자는 다음과 같습니다:  
1. FlowLayout: 컴포넌트들을 왼쪽에서 오른쪽으로, 위에서 아래로 흐르듯이 배치합니다.
``` java
    panel.setLayout(new FlowLayout());
```  
2. BorderLayout: 컴포넌트를 북(North), 남(South), 동(East), 서(West), 중앙(Center)에 배치합니다.
``` java
    frame.setLayout(new BorderLayout());
    frame.add(panel, BorderLayout.CENTER);
```  
3. GridLayout: 컴포넌트를 격자 형태로 배치합니다.
``` java
    panel.setLayout(new GridLayout(2, 2)); // 2x2 격자
```  
4. BoxLayout: 컴포넌트를 수평 또는 수직으로 배치합니다.
``` java
    panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS)); // 수직 배치
```  
5. GridBagLayout: 매우 유연하고 복잡한 레이아웃을 구현할 수 있는 관리자입니다.
``` java
    panel.setLayout(new GridBagLayout());
    GridBagConstraints gbc = new GridBagConstraints();
    gbc.gridx = 0;
    gbc.gridy = 0;
    panel.add(button, gbc);
```  
## 스윙 이벤트 처리  
스윙에서는 다양한 이벤트를 처리할 수 있습니다. 이벤트 처리를 위해 이벤트 리스너를 등록하고, 해당 이벤트가 발생했을 때 수행할 작업을 정의합니다.  

예를 들어, 버튼 클릭 이벤트를 처리하기 위해 ActionListener를 사용할 수 있습니다.  
``` java
    button.addActionListener(new ActionListener() {
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button Clicked!");
    }
});
```  
람다 표현식을 사용하면 더 간결하게 작성할 수 있습니다.  
``` java
    button.addActionListener(e -> System.out.println("Button Clicked!"));
```  
## 스윙 애플리케이션 예제  
아래는 간단한 스윙 애플리케이션의 예제입니다. 이 애플리케이션은 프레임을 생성하고, 패널에 라벨, 텍스트 필드, 버튼을 추가합니다. 버튼을 클릭하면 텍스트 필드의 내용을 라벨에 표시합니다.  
``` java
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SwingExample {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Swing Example");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 200);

        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);

        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);

        JLabel userLabel = new JLabel("User:");
        userLabel.setBounds(10, 20, 80, 25);
        panel.add(userLabel);

        JTextField userText = new JTextField(20);
        userText.setBounds(100, 20, 165, 25);
        panel.add(userText);

        JButton loginButton = new JButton("Login");
        loginButton.setBounds(10, 80, 80, 25);
        panel.add(loginButton);

        JLabel resultLabel = new JLabel("");
        resultLabel.setBounds(100, 80, 300, 25);
        panel.add(resultLabel);

        loginButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String userName = userText.getText();
                resultLabel.setText("Hello, " + userName + "!");
            }
        });
    }
}
```  
## 5월 24일 강의내용
1교시 9장  
1. 이벤트 소스(Event Source):  
    * 이벤트 소스는 이벤트를 발생시키는 객체입니다. 예를 들어, 버튼, 텍스트 필드, 체크박스 등과 같은 GUI 컴포넌트는 이벤트 소스가 될 수 있습니다. 이벤트 소스는 특정 이벤트가 발생할 때 이를 리스너에게 전달합니다.  

2. 이벤트 객체(Event Object):  
    * 이벤트 객체는 이벤트에 대한 정보를 캡슐화합니다. 이벤트가 발생하면, 이벤트 소스는 이벤트 객체를 생성하여 리스너에게 전달합니다. 이벤트 객체에는 이벤트의 종류, 발생 시간, 이벤트 소스 등의 정보가 포함됩니다. 예를 들어, ActionEvent, MouseEvent, KeyEvent 등이 있습니다.  

3. 이벤트 리스너(Event Listener):  
    * 이벤트 리스너는 이벤트가 발생했을 때 실행될 코드를 정의하는 객체입니다. 리스너는 특정 이벤트를 처리하기 위해 인터페이스를 구현해야 합니다. 자바는 다양한 이벤트에 대응하는 리스너 인터페이스를 제공합니다. 예를 들어, ActionListener, MouseListener, KeyListener 등이 있습니다.  

4. 이벤트 핸들러(Event Handler):  
    * 이벤트 핸들러는 리스너 인터페이스의 메서드를 구현하여 실제로 이벤트가 발생했을 때 수행될 작업을 정의하는 부분입니다. 핸들러 메서드는 이벤트 객체를 인자로 받아 이벤트에 대한 처리를 수행합니다.  

5. 이벤트 처리 과정  
    * 자바에서 이벤트 처리는 다음과 같은 순서로 이루어집니다:  
1. 이벤트 소스와 리스너 연결:  
    * 이벤트 소스 객체에 리스너를 등록합니다. 예를 들어, JButton 객체에 ActionListener를 등록할 수 있습니다.  
``` java
    JButton button = new JButton("Click Me");
    button.addActionListener(new MyActionListener());
```  
1. 이벤트 발생:
    * 사용자가 버튼을 클릭하거나 키보드를 누르는 등 이벤트가 발생합니다.  

2. 이벤트 객체 생성:
    * 이벤트 소스는 이벤트가 발생하면 이벤트 객체를 생성합니다.  

3. 이벤트 객체 전달:  
    * 이벤트 소스는 등록된 리스너에게 이벤트 객체를 전달합니다.  

4. 이벤트 처리:
    * 리스너는 전달된 이벤트 객체를 사용하여 이벤트를 처리합니다.  
    ## 예제 코드
    * 아래는 간단한 자바 스윙 애플리케이션에서 버튼 클릭 이벤트를 처리하는 예제입니다:
``` java
import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class EventHandlingExample {
    public static void main(String[] args) {
        // JFrame 생성
        JFrame frame = new JFrame("Event Handling Example");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // JButton 생성
        JButton button = new JButton("Click Me");

        // ActionListener 등록
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button Clicked!");
            }
        });

        // JFrame에 버튼 추가
        frame.getContentPane().add(button);
        
        // JFrame 표시
        frame.setVisible(true);
    }
}
```
## 주요 이벤트 리스너 인터페이스  
자바에서 제공하는 주요 이벤트 리스너 인터페이스는 다음과 같습니다:

1. ActionListener:  
    * actionPerformed(ActionEvent e) 메서드를 구현하여 버튼 클릭, 메뉴 선택 등의 액션 이벤트를 처리합니다.  

2. MouseListener:  
    * mouseClicked(MouseEvent e), mousePressed(MouseEvent e), 
    mouseReleased(MouseEvent e), mouseEntered(MouseEvent e), 
    mouseExited(MouseEvent e) 메서드를 구현하여 마우스 이벤트를 처리합니다.  

3. KeyListener:  
    * keyTyped(KeyEvent e), keyPressed(KeyEvent e), keyReleased(KeyEvent e) 메서드를 구현하여 키보드 이벤트를 처리합니다.  

4. WindowListener:  

    * windowOpened(WindowEvent e), windowClosing(WindowEvent e), windowClosed(WindowEvent e), windowIconified(WindowEvent e), windowDeiconified(WindowEvent e), windowActivated(WindowEvent e), windowDeactivated(WindowEvent e) 메서드를 구현하여 윈도우 이벤트를 처리합니다.  
    
## 이벤트 어댑터 클래스  
* 자바는 이벤트 리스너 인터페이스를 구현할 때 모든 메서드를 다 구현해야 하는 불편함을 줄이기 위해 어댑터 클래스를 제공합니다. 어댑터 클래스는 리스너 인터페이스를 구현한 추상 클래스이며, 모든 메서드를 빈 구현으로 제공하여 필요한 메서드만 오버라이드할 수 있게 합니다. 예를 들어, MouseAdapter, KeyAdapter, WindowAdapter 등이 있습니다.  
``` java
button.addMouseListener(new MouseAdapter() {
    @Override
    public void mouseClicked(MouseEvent e) {
        System.out.println("Mouse Clicked!");
    }
});
```
1. 이벤트 기간 프로그래밍  
    * 이벤트의 발생에 의해 프로그램 흐름이 결정되는 방식  
        * 이벤트가 발생하면 이벤트를 처리하는 루틴 실행  
        * 실행될 코드는 이벤트의 발생에 의해 전적으로 결정  
    * 반대되는 개념 : 배치 실행  
        * 프로그램의 개발자가 프로그램의 흐름을 결정하는 방식  
    * 이벤트 종류  
        * 사용자의 입력 : 마우스 드래그, 마우스 클릭, 키보드 누름등  
        * 센서로부터의 입력, 네트워크로부터 데이터 송수신  
        * 다른 응용프로그램이나 다른 스레드로부터의 메시지  
    * 이벤트 기반응용 프로그램의 구조  
        * 각 이벤트마다 처리하는 르스너 코드 보유  
    * GUI 응용 프로그램은 이벤트 기반 프로그래밍으로 작성됨  
2. 이벤트 처리되는 과정  
    * 이벤트 발생  
        * 마우스의 움직임 혹은 키보드 입력  
    * 이벤트 객체 생성  
        * 현재 발생한 이벤트에 대한 정보를 가진 객체  
    * 응용프로그램에 작성된 이벤트 리스너 찾기  
    * 이벤트 리스너 실행  
        * 리스너에 이벤트 객체 전달  
        * 리스너 코드 실행  
3. 이벤트 객채  
    * 발행한 이벤트에 관한 정보를 가진 객체  
    * 이벤트 리스너에 전달됨  
        이벤트 리스너 코드가 발생한 이벤트에 대한 상황을 파악할 수 있게 함  
    * 이벤트 객체가 포함하는 정보  
        * 이벤트 종류와 이벤트 소스  
        * 이벤트가 발생한 화면 좌표 및 컴포넌트 내 좌표  
        * 클릭된 마우스 버튼 번호 및 마우스의 클릭 휫수  
        * 키의 코드 값과 문자 값  
        * 체크박스, 라디오버튼 등과 같은 컴포넌트에 이벤트가 발생하였다면 체크 상태  
    * 이벤트 소스를 알아 내는 메소드  
        * Object getSource()
            * 발생한 이벤트의 소스 컴포넌트 리턴  
            * Object 타입으로 리턴하므로 캐스팅하여 사용  
            * 모든 이벤트 객체에 대해 적용
4. 리스너 인터페이스
    * 이벤트 리스너  
        * 이벤트를 처리하는 자바 프로그램 코드, 클래스로 작성  
    * 자바는 다양한 리스너 인터페이스 제공  
        * AcionKistener 인터헤이스 : 버튼 클릭 이벤트를 처리하기 위한 인터페이스  
        * MouseKistener 인터페이스 : 마우스 조작에 따른 이벤트를 처리하기 위한 인터페이스
    * 사용자의 이벤트 리스너 작성  
        * 자바의 리스너 인터페이스를 상속받아 구현 
        * 리스너 인터페이스의 모든 추상 메소드 구현
5. 이벤트 리스너 작성 과정 사례  
    * 이벤트와 이벤트 리스너 선택  
        * 버튼 클릭을 처리하고자 하는 경우  
            * 이벤트 : Action 이벤트, 이벤트 리스너 : ActionListener  
    * 이벤트 리스너 클래스 작성 : ActionListener 인터페이스 구현  
    * 이벤트 리스너 등록  
        * 이벤트를 받아 처리하고자 하는 컴포넌트에 이벤트 리스너 등록  
        * component.addXXXListener  
            * xxx : 이벤트 명, listener : 이벤트 리스너 객체  
6. 이벤트 리스너 작성 방법  
    * 3기자 방법  
        * 독립 클래스로 작성   
            * 이벤트 리스너를 완전란 클래스로 작성  
            * 이벤트 리스너를 여러 곳에서 사용할 때 적합  
        * 내부 클래스 작성  
            * 클래스 안에 멤버처럼 클래스 작성  
            * 이벤트 리스너를 특정 클래스에서만 사용할 때 적합  
        * 익명 클래스 작성  
            * 클래스 이름 없이 간단히 리스너 작성  
            * 클래스 조차 만들 필요없이 리스너 코드가 간단한 경우 적합  
7. 익명 클래스러 이벤트 리스너 작성  
* 익명 클래스 : 이름 없는 클래스  
    * 클래스 선언 + 인스턴스 생성을 한번에 달성  
    *  간단한 리스너의 경우 익명 클래스 사용 추천  
        * 메소드의 개수가 1,2개인 리스너애 대해 주로 사용  
8. 어댑터 클래스  
* 이벤트 리스너 구현에 따른 부답  
    * 리스너의 추상 메소드를 모두 구현해야 하는 부담  
* 어댑터 클래스  
    * 
9. Key 이벤트와 포커스  
* 키 입력 시, 다음 세 경우 각각 Key 이벤트 발생  
    * 키를 누르는 순간  
    * 누른 키를 떼는 순간  
    * 누른 키를 떼는 순간  
* 키 이벤트를 받을 수 있는 조건  
    * 모든 커포넌트  
    * 현재 포커스를 가진 컴포넌트가 키 이벤트 독점  
10. 유니코드 키  
    * 유니코드 키의 특징
        * 국제 산업 표준  
        * 전세계의 문자를 컴퓨터에서 일관되게 표현하기 위한 코드 체계  
        * 문자들에 대해서만 키 코드 값 정의  
        * 문자가 아닌 키 경우에는 표준화된 키 코드 값 없음  
    * 유니코드 키가 입력되는 경우  
## 5월 17일 강의 내용

1교시  
1. 스윙의 특징  
    * 플랫폼 독립성  
        스윙은 순수 자바로 작성되어 있어서 어떤 운영체제에서도 동일하게 동작합니다. 이는 "Write Once, Run Anywhere"라는 자바의 철학을 잘 따르는 것입니다.

    * 풍부한 컴포넌트  
        스윙은 버튼, 텍스트 필드, 체크박스, 라디오 버튼, 스크롤 패인, 탭 패인 등 다양한 GUI 컴포넌트를 제공합니다. 이러한 컴포넌트는 AWT보다 더 기능적이고 확장 가능하도록 설계되었습니다.  

    * MVC 아키텍처  
        스윙 컴포넌트는 Model-View-Controller(MVC) 디자인 패턴을 따릅니다. 이는 컴포넌트의 데이터(Model)와 화면(View), 그리고 상호작용을 처리하는 로직(Controller)을 분리하여 보다 구조화된 코드 작성을 가능하게 합니다.

    * 가볍고 유연함  
        스윙은 AWT와 달리 "lightweight" 컴포넌트입니다. 이는 컴포넌트가 OS에 직접 의존하지 않음을 의미하며, 대신 자바로 구현된 더 많은 사용자 정의와 유연성을 제공합니다.  

2. 스윙의 기본 구조  
스윙 애플리케이션은 일반적으로 다음과 같은 기본 구조를 가집니다:  

* JFrame  
JFrame은 스윙에서 가장 기본적인 윈도우 프레임입니다. 이는 애플리케이션의 메인 윈도우로 사용됩니다.
``` java 
import javax.swing.JFrame;

public class MainFrame extends JFrame {
    public MainFrame() {
        setTitle("My Swing Application");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new MainFrame().setVisible(true);
            }
        });
    }
}
```  
위의 예제는 간단한 스윙 애플리케이션을 생성하여 윈도우 프레임을 표시하는 코드입니다. invokeLater 메서드는 이벤트 디스패치 스레드에서 GUI 업데이트를 안전하게 수행하기 위해 사용됩니다.  
``` java 
import javax.swing.JFrame;

public class MainFrame extends JFrame {
    public MainFrame() {
        setTitle("My Swing Application");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new MainFrame().setVisible(true);
            }
        });
    }
}
```  
* JPanel  
JPanel은 다른 컴포넌트를 그룹화하고 레이아웃을 관리하는데 사용됩니다. 여러 개의 JPanel을 사용하여 복잡한 레이아웃을 구성할 수 있습니다.  
``` java  
import javax.swing.JPanel;
import javax.swing.JButton;

public class MainPanel extends JPanel {
    public MainPanel() {
        JButton button = new JButton("Click Me");
        add(button);
    }
}
```  
* Layout Managers  
스윙은 컴포넌트 배치를 관리하는 다양한 레이아웃 매니저를 제공합니다. 대표적인 레이아웃 매니저로는 FlowLayout, BorderLayout, GridLayout, BoxLayout 등이 있습니다.   
``` java  
import java.awt.BorderLayout;

public class MainFrame extends JFrame {
    public MainFrame() {
        setTitle("BorderLayout Example");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        setLayout(new BorderLayout());

        add(new JButton("North"), BorderLayout.NORTH);
        add(new JButton("South"), BorderLayout.SOUTH);
        add(new JButton("East"), BorderLayout.EAST);
        add(new JButton("West"), BorderLayout.WEST);
        add(new JButton("Center"), BorderLayout.CENTER);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new MainFrame().setVisible(true);
            }
        });
    }
}
```  
* 이벤트 처리  
스윙에서 이벤트 처리는 매우 중요한 부분입니다. 스윙 컴포넌트에 이벤트 리스너를 등록하여 사용자 상호작용을 처리할 수 있습니다.  
``` java  
import javax.swing.JButton;
import javax.swing.JFrame;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class MainFrame extends JFrame {
    public MainFrame() {
        setTitle("Event Handling Example");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JButton button = new JButton("Click Me");
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("Button Clicked!");
            }
        });

        add(button);
    }

    public static void main(String[] args) {
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                new MainFrame().setVisible(true);
            }
        });
    }
}
```  
위의 예제에서는 JButton에 액션 리스너를 추가하여 버튼 클릭 시 콘솔에 메시지를 출력하도록 합니다.  

3. 스윙 컴포넌트들  

* JButton  
버튼 컴포넌트로, 클릭 시 액션을 수행할 수 있습니다.  

``` java
JButton button = new JButton("Click Me");
JLabel
```  
* JLabel  
텍스트나 이미지를 표시하는 레이블 컴포넌트입니다.  

``` java
JLabel label = new JLabel("Hello, World!");
JTextField
```  
* JTextField  
한 줄의 텍스트 입력을 받는 필드입니다.  

``` java
JTextField textField = new JTextField(20);
JTextArea
```  
* JTextArea  
여러 줄의 텍스트 입력을 받는 영역입니다.

``` java
JTextArea textArea = new JTextArea(5, 20);
JCheckBox
```  
* JCheckBox  
체크박스 컴포넌트로, 선택 여부를 나타냅니다.

``` java
JCheckBox checkBox = new JCheckBox("Accept Terms");
JRadioButton
``` 
* JRadioButton  
라디오 버튼 컴포넌트로, 같은 그룹 내에서 하나만 선택될 수 있습니다.

``` java
JRadioButton radioButton1 = new JRadioButton("Option 1");
JRadioButton radioButton2 = new JRadioButton("Option 2");
ButtonGroup group = new ButtonGroup();
group.add(radioButton1);
group.add(radioButton2);
JComboBox
```
* JComboBox  
드롭다운 목록을 제공하는 컴포넌트입니다.

``` java
String[] items = {"Item 1", "Item 2", "Item 3"};
JComboBox<String> comboBox = new JComboBox<>(items);
JTable
```
* JTable  
표 형식의 데이터를 표시하는 컴포넌트입니다.

``` java
String[] columnNames = {"Column 1", "Column 2"};
Object[][] data = {
    {"Data 1", "Data 2"},
    {"Data 3", "Data 4"}
};
JTable table = new JTable(data, columnNames);
``` 
4. 스윙의 고급 기능  

* Look and Feel  
스윙은 다양한 룩 앤 필(Look and Feel)을 지원하여 애플리케이션의 외관을 변경할 수 있습니다. 기본적으로 크로스 플랫폼 룩 앤 필, 시스템 룩 앤 필 등을 제공합니다.  

``` java
import javax.swing.UIManager;
import javax.swing.UnsupportedLookAndFeelException;

public class Main {
    public static void main(String[] args) {
        try {
            UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
        } catch (ClassNotFoundException | InstantiationException | IllegalAccessException | UnsupportedLookAndFeelException e) {
            e.printStackTrace();
        }

        new MainFrame().setVisible(true);
    }
}
```  
* 멀티스레딩  
    스윙 애플리케이션에서는 UI 업데이트와 관련된 작업을 이벤트 디스패치 스레드에서 수행해야 합니다. 이를 위해 SwingUtilities.invokeLater와 같은 메서드를 사용하여 안전하게 UI를 업데이트할 수 있습니다.  
## 5월 3일 강의 내용  

1교시  
1. 컬렉션  
    * 컬렉션은 여러 개의 데이터를 하나의 단위로 관리할 수 있는 자료구조입니다. 자바, 파이썬, C++, C#, 자바스크립트 등 다양한 프로그래밍 언어에서 컬렉션을 제공합니다. 컬렉션은 데이터의 집합을 효율적으로 저장하고 관리하기 위한 다양한 방법을 제공하며, 주요 기능은 데이터의 삽입, 삭제, 검색, 정렬 등이 있습니다.  
        
2. 컬렉션 특징  
    1. List  
        * 순서가 있는 요소의 집합입니다.  
        * 요소의 중복을 허용합니다.  
        * 인덱스를 사용하여 요소에 접근할 수 있습니다.  
        * 구현 클래스: ArrayList, LinkedList, Vector, Stack  
    2. Set 
        * 중복되지 않는 요소의 집합입니다.  
        * 순서가 없습니다.  
        * 수학적인 집합 개념을 따릅니다.  
        * 구현 클래스: HashSet, LinkedHashSet, TreeSet  
    3. Map
        * 키와 값의 쌍으로 이루어진 요소의 집합입니다.  
        * 키는 중복될 수 없으나 값은 중복될 수 있습니다.  
        * 키를 기준으로 값을 검색합니다.
        * 구현 클래스: HashMap, LinkedHashMap, TreeMap, Hashtable  
    4. Queue  
        * FIFO(First In, First Out) 방식으로 요소를 관리합니다.  
        * 대기열 구조를 따릅니다.  
        * 구현 클래스: LinkedList, PriorityQueue
    5. Deque  
        * 양쪽 끝에서 요소를 추가/삭제할 수 있는 큐입니다. 
        * FIFO 및 LIFO(Last In, First Out) 방식을 모두 지원합니다.  
        * 구현 클래스: ArrayDeque, LinkedList  
3. 제네릭  
    * 제네릭은 컬렉션과 같은 클래스나 메소드에서 사용할 데이터 타입을 일반화하는 기법입니다. 제네릭을 사용하면 컴파일 시 타입을 체크할 수 있어 더 안전하고 유연한 코드를 작성할 수 있습니다. 제네릭은 클래스, 인터페이스, 메소드에 적용할 수 있습니다.  
4. 제네릭 클래스  
``` java
    public class Box<T> {
    private T item;
    
    public void setItem(T item) {
        this.item = item;
    }
    
    public T getItem() {
        return item;
    }
}
```
* 여기서 T는 타입 매개변수입니다. Box 클래스는 T 타입의 아이템을 저장할 수 있습니다.  
* 실제 사용 시 타입을 지정합니다.  
``` java
    Box<String> stringBox = new Box<>();
    stringBox.setItem("Hello");
    String item = stringBox.getItem();
```
5. 제네릭 메소드  
``` java
public static <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.println(element);
    }
}
```
* 여기서 <T>는 메소드의 타입 매개변수입니다. printArray 메소드는 어떤 타입의 배열이든 출력할 수 있습니다.  
* 실제 사용 시 타입을 지정하지 않아도 컴파일러가 추론합니다.  
``` java
    Integer[] intArray = {1, 2, 3};
    printArray(intArray);
```
6. 제한된 타입 매개변수
    * 타입 매개변수에 특정 타입만 허용하도록 제한할 수 있습니다.  
``` java
    public <T extends Number> void process(T number) {
    // number는 Number 클래스 또는 그 하위 클래스 타입만 허용됩니다.
}
```
7. 컬렉션과 제네릭의 결합  
: 컬렉션은 제네릭을 활용하여 더 안전하게 사용할 수 있습니다. 예를 들어, ArrayList는 제네릭 클래스로 정의되어 있어 타입 안정성을 보장합니다.  
``` java
    ArrayList<String> stringList = new ArrayList<>();
    stringList.add("Hello");
    stringList.add("World");
    // stringList.add(123); // 컴파일 에러: 타입 불일치
    String str = stringList.get(0);
```  
이렇게 하면 컬렉션에 저장할 수 있는 타입을 명확히 지정할 수 있으며, 잘못된 타입의 데이터가 저장되는 것을 방지할 수 있습니다. 또한, 컬렉션에서 데이터를 꺼낼 때 타입 캐스팅을 할 필요가 없어 코드가 간결해지고 안전해집니다.  
9. 제네릭의 이점  
1. 타입 안정성  
    * 컴파일 시 타입을 체크하여 런타임 에러를 줄입니다.  
2. 재사용성  
    * 다양한 타입에 대해 동일한 코드를 사용할 수 있어 코드의 재사용성이 높아집니다.  
3. 가독성  
    * 타입 캐스팅이 필요 없어 코드가 간결하고 읽기 쉬워집니다.  
4. 유연성  
    * 특정 타입에 국한되지 않고 다양한 타입을 처리할 수 있습니다.  
10. 벡터의 특성  
    * <E>에 사용할 요소의 특정 타입으로 구체화  
    * 배열을 가변 크기로 다룰 수 있게 하는 컨테이너  
    * 요소 객체들을 삽입, 삭제 이동이 쉽도록 구성한 컬렉션 클래스  
    * 삽입되는 요소의 개수에 따라 자동으로 크기를 조절  
    * 요소의 삽입과 삭제에 따라 자동으로 요소들의 자리를 이동  
11.  컬렉션과 자동 박싱/언박싱  
    * 객체들반 요소로 다루므로 타입의 값은 Wrapper 클래스로 객체화하여 삽입하는 것이 정상  
    * 컬렉션으로부터 값을 얻어내는 과정도 **자동 언박싱**을 활용한다.  
12. 컬렉션 생성문의 진화 Java 7, Java 10  
    1. Java 7  
        * 컬렉션의 객체 생성부의 <> 내(다이아몬드 연산자)에 타입 매개변수를 생략  
        * 컴파일러가 추론하여 타입 매개변수를 찾아주오록 하였다.  
    2. Java 10  
        * var키워드를 도입하여 컴파일러에게 선언문으로부터 변수의 타입을 추론  
## 중간고사  
code 완성  
오류 수정  

1. 프로젝트 생성  git 초기화, commit  
2. class 생성 실행 생성자  
3. 패키지 생성, 사용
## 4월 19일 강의 내용  
1교시  
1. 추상 클래스  
    * 추상 메소드  
        * abstract로 선언된 메소드, 메소드의 코드는 없고 원형만 선언  
    * 추상 클래스  
        * 추상 메소드를 가지며, abstract로 선언된 클래스  
        * 추상 메소드 없이, abtract로 선언한 클래스  
2. 추상 클래스의 상속과 구현
    * 추상 클래스  
        * 추상 클래스를 상속 받으면 추상 클래스가 됨  
        * 서브 클래스도 abstract로 선언해야 한다  
    * 추상 클래스 수현  
        * 서브 클래스에서 슈퍼 클래스의 추상 메소드 구현(오버라이딩)  
        * 추상 클랫를 구현한 서브 클래스는 추상 클래스가 아님  
3. 추상 클래스의 목적  
    * 추상 클래스의 목적
        * 상속을 위한 슈퍼 클래스롤 활용하는것  
        * 서브 클래스에서 추상 메소드 구현  
        * 다형성 실현  
4. 자바의 인터 페이스  
    * 자바의 인터페이스  
        * 클래스가 구현해야 할 메소드들이 선언되는 추상형  
        * 인터페이스 선언  

    * 자바 인터페이스에 대한 변화  
        * java 7까지  
            * 인터페이스는 상수와 추상메소드로만 구선  
        * java 8부터  
            * 상수와 추상 메소드 포함
5. 인터베이스의 구성 요소  
* 상수  
    * public만 허용, public static final 속성  
* 추상메소드  
    * 속성이 punlic abatrect로 정새뎌 있으며 생략 가능하다.  
* **인터페이스의 객체는 생성할 수 없다.**  
6. 인터페이스 상속  
    * 다른 인터페이스를 상속할 수 있다.  
    * 상속을 통해 기종 인터페이스에 새로운 규격을 추가한 새로운 인터페이스를 만든다.  
7. 인터페이스 구현  
    * implements 키워드를 사용하여 인터페이스의 모든 추상 메소드를 구현한 쿨래흐를 작성하는 것  
8. 패키지 개념과 필요성  
    * 합칠 떄 오류 발생 가는성  
    * 개발자가 서로 다른 디렉터리로 코드 관리하여 해결
9. 패키지  
    * 서로 관련된 클래스와 인터페이스를 컴파일한 클래스 파일들을 묶어 놓은 이렉터리  
    * 하나의 응용프로그램은 한 개 이상의 패키지로 작헝  
    * 패키지는 jar파일로 압축할 수 있음  
10. 모듈  
    * 여러 패키지와 이미지 등의 자원을 모아 놓은 컨테이너  
11. 모듈화의 목적  
    * java 9부터 자바 API를 여러 모쥴로 분할  
    * 응용프로그램이 실행할 때 꼭 필요한 모듈들로만 실행 환경 구축  
12. 모듈의 현실  
    * JAVA 9부터 전면적으로 도입  
    * 복잡한 개념  
    * 큰 자바 응용프로그램에는 개발, 유지보수 등에 적합  
    * 현짓적으로 모듈로 나누어 자바 프로그램을 작성할 필요 없음  
13. 자바 JDK에 제공되는 오듈 파일들  
    * 자바가 설치된 jmods 이렉터리에 모듈 파일 존재  
14. 패키지 사용하기  
    * 다른 패키지에 작성된 클래스 사용  
        * 소스에 클래스 이름의 완전 경로명 사용  
    * 필요한 클래스만 import  
        * 소스 시작 부분에 클래스의 경러명 improt  

    *  패키지 전체를 import  
        * **import 패키지**  
15. 패키지 만들기  
* 클래스 파일이 저장되는 위치는  
    * 클래스나 인터페이스가 컴파일 되면 클래스 파일 생성  
16. 디폴트 패키지  
    * package 선언문이 없을 때, 자바 컴파일러는 클래스나 인터페이스를 디폴트 패키지에 소속 시킨다.  
17. 모듈  
    * JAVA9에서 도입된 개념  
    * 패키지가 서로 관련있는 클래스나 인터페이스와 컴파일된 클래스 파일들을 한 곳에 담는 컨테이너라면, 모듈은 패키지들을 담는 컨테이너로 모듈 파일로 저장한다.  
18. 자바 플랫폼의 모듈화  
    * 자바 프로그램의 개발 환경과 실행 환경을 함께 자칭하는 것  
    * 패키지의 켸층 구조로만 되어 있든 클래스들을 수십개의 작은 모듈들로 재구성하였다.  
19. 모듈 기반의 자바 실행 환경  
    * 자바 응용프로그램이 실행되는데 **필요한 제반 환경으로서,  
    * 응용프로그램이 실행 중에 사용하는 자바 AIP 클래스와 자바 가상 기계등으로 이루어진다.  
20. 자바 모듈화의 목적  
    * 자바 컴포넌트들을 필요에 따라 조립히여 사용하기 위함이다.
    * 컴퓨터 시스템에 불필요한 부담을 줄인다.  
        1. 세밀한 모듈화를 통해, 필요 없는 모듈이 로드되지 않게 하여,  
        2. 소형 IOT 장치에서도 자바 응용프로그램이 실행되고 성능을 유지하게 한다.  
21. JDK의 주요 패키지  
    * java.lang - System을 비롯하여 문자열, 수학 함수, 입출력 등과 같이 자바 프로그래밍에 필요한 기본적인 클래스와 인터페이스 제공.  
    * java,util - 날짜, 시간, 벡터, 해시맵 등의 유틸리티  클래스와 인터페이스.  
    * java.io - 키보드, 모니터, 프린터 등의 입출력 클래스와 인터페이스.  
    * java.awt - GUI 프로그래밍에 필요한 AWT 클래스와 인터페이스.  
    * javax.swing - 스윙 GUI 프로그래밍에 필요한 클래스와 인터페이스.  
22. Object 클래스의 특징  
    * 모든 클래스가 상속받아 사용할 공통 기능이 구현되어 있다.  
23. 객체 속성  
    * hashCode() : 객체의 해시 코드 값, 객체를 나타내는 문자열 정보를 제공한다.  
    * getClass() : 객체으 클래스 정보를 담은 Class 객체를 리턴한다.  
    * getName() : 호출하면, 객체의 클래스 명을 안아낼 수 있다.  
24. toString() 메소드, 객체를 문자열로 변환  
    * 클래스는 toString()을 오버라이딩하여 자신만의 문자열을 리턴할 수 있다.  
25. 객체 비교와 rquals()의 메소드  
    1. == 연산자  
        * 두 레퍼런스 값을 비교한다.  
    2. boolean equals  
        * 객체의 내용이 같은지를 비교하는 메소드이다.  
        * 클래스에 equals() 메소드를 재작성해야 한다.  
26. Wrapper 클래스 개념  
    * 8개의 클래스를 통칭하여 Wrapper 클래스라 말한다.  
    * 이런 문제점을 해결하기 위해 기본 타입의 값을 객체로 만들어 사용할 수 있도록 Wrapper 클래스를 제공한다.  
27. 박싱과 언박싱  
    * 박싱 : 기본 타입의 값을 Wrapper 객페로 변환하는 것  
    * 언박싱 : 반대의 경우를 말한다.  
28. String의 생성과 특징  
    * 문자열을 나타내며 , 스트링 리터럴은 String 객체로 처리된다.  
        1. 스트링 리터럴과 new String()  
            * 자바 내무에서 리터럴 테이블로 특별히 관리하여, 동일한 리터럴은 공유시킨다.  
            * new String()에 의해 생성된 스트링은 힙 메모리에 별도로 생성한다.  
29. Math 클래스  
    * 기본적인 산술 연산을 수행하는 메소드를 제공하는 클래스  
    * 메소드가 static 타입



## 4월 12일 강의 내용  
1교시  
1. static 멤버 생성  
* static 멤버는 클래스당 하나만 생성  
* 객체들에 의해 공유됨  
2. static 멤버와 non-static 멤버 특성 정리  
```  
                non-static 멤버           static 멤버  
시간적 특성 : 객체 생성 시에 멤버 생성됨      클래스 로딩 시 멤버 생성  
           * 객체가 생길 깨 멤버도 생성   * 객체가 생기기전에 이미 생성
           * 객체 생성 후 멤버 사영 가능  * 객체가 생기기 전에도 사용 가능 
           * 객체가 사라지면 멤버도 사라짐 * 멤버는 프로그램이 종료될 때 사라짐 
```  
3. static 멤버 사용  
* 클래스 이름으로 접근 가능  
* 객체의 멤버로 접건 가능  
* non-static 멤버는 클래스 이름으로 접근 안 됨  
4. static으 활용  
* 전역 변수와 전역함수를 만들 때 사용  
* 공유 멤버를 만들고자 할 때 활용  
5. static 메소드의 제약 조건  
* static 메소드는 오직 static 멤버만 접근할 수 있다.  
    * 객체가 생성되지 않은 상황에서도 사용이 가능하므로 객체에 속한 인스턴스 메소드, 인스턴스 변수 등을 사용할 수 없고, **static 멤버들만 사용 가능**하다.  
* static 메소드에서는 this를 사용할 수 없다.  
    * 객체 없이도 존제하기 때문에, static 메소드에서 this를 사용할 수 없다.  
6. final 클래스   
* final이 클래스 이름 앞에 사용되면 클래스를 **상속받을 수 없음**을 지정한다.  
7. final 메소드  
* 메소드 앞어 final이 붙으면 이 메소드는 더이상 **오버라이지할 수 없음**을 지정한다.  
* 자식 클래스가 부모 클래스의 특정 메소드를 오버라이딩 하지 못하게 하고 무조건 상속 받아 사용하도록 하고자 한다면 final로 지정하면 된다.  
7. final 필드  
* 자바에서 final로 필드를 선언하면ㄴ 필드는 **상수**가 된다.  
* 상수 필드는 한번 초기화되면 값을 변경할 수 없다.  
* final 키워드를 public static과 함께 선언하면, 프로그램 전체에서 공유할 수 있는 상수가 된다.  

5장 상속  
1. 객체 지향 상속  
* 자식이 부모 유전자를 물려 받는 것과 유사한 개념  
2. 상속의 필요성  
* 상속이 없는 경우 중복된 멤버를 가진 4개의 클래스  
* 상속을 이영한 경우 중복이 제거되고 간결해진 클래스 구조  
3. 상속의 장점  
* 클래스 사이의 멤버 중복 선언 불필요- 클래스 간결화  
* 클래스들의 계츤적 분류로 클래스 관리 용이  
* 클래스 재사용과 확장을 통한 소프트웨어의 생산성 향상  
4. 상속 선언  
* extends 키워드로 선언  
    * 부모클래스를 물려받아 확장한다는 의미  
* 부모 믈래스-수퍼 클래스  
* 자식 클래스-서브 클래스  
5. 상속과 객체  
* 상속 선언  
    * Point를 상속받는 ColoPoint의 상속 선언
    ``` java  
    class ColoPoint extends Point{...}
    ``` 
* 서브 클래스 객체 생성  
    * Point 클래스의 객체 p와 ClolrPoint 클래스의 객체 cp 생성  
    ``` java  
    Point p = new Point();
    CilirPoint cp = new ColoPoint();//서브 클래스 생성  
    ```  
* 서브 클래스 객체 활용  
    * 외부에서 CilirPoint 클래스의 punlic 멤버와 슈퍼클래스 Point의 public 멤버를 모두 접근할 수 있다.  
* 서브 클래스에서 슈퍼 클래스 멤버 접근  
    * 슈퍼 클래스의 puivate멤버외 모든 멤버를 접근할 수 있다.  
6. 상속의 특징  
    1. 자바에서는 클래스의 **다중 상속**을 지원하지 않는다.  
        * 자바는 C/C++와 달리 클래스를 여러 개 상속받는 다중 상속을 지원하지 않는다.  
        * 하지만 **인스턴스**는 다중으로 상속받아 구현할 수 있다.  
    2. 자바의 모든 클래스는 자바에서 제공하는 **Object 클래스**를 자돋으로 상속 받도록 컴파일된다.  
        * Object클래스의 경로명은 java.long.Object이면, 유일하게 슈퍼 클래스를 가지지 않는 클래스이다.  
7. protected 접근 지정  
    * 자바의 접근 지정자는 private, public, protected, 디폴트의 4가지이다.  
    1. 슈퍼 크래스의 디폴트 멤버에 대한 서브 클래스의 접근  
        * 접근 지정자가 선언되어 있지 않을 때, **디폴트 접근 지정**이라 부르며, 슈퍼 클래스의 디폴트 멤버는 동일한 패키지에 있는 클래스들에게만 접근이 허용된다.  
        * 서브 클래스가 슈퍼 클래스와 다른 패키지에 있다면, 슈퍼 클래스의 디폴트 멤버를 접근할 수 없다.  
    2. protected 멤버  
        * 슈퍼 클래스의 **protected 멤버**는 두가지 경우의 접근을 허용  
            1. 같은 패키지에 속한 모든 클래스  
            2. 상속되는 서브 클래스(같은 패키지든 다름 패키지든 상관 없음)  
8. 상속과 생성자  
    1. 서브 클래스와 슈퍼 클래스의 생성자 호출 및 실행  
        * 서브 클래스와 슈퍼클래스 모두 **생성자**를 가지고 있다. 
    2. 서브 클래스에서 슈퍼 클래스 생성자 선택  
        * 슈퍼 클래스에 여러 개의 생성자가 있을 수 있다.  
        * 서브 클래스의 개발자가 서브 클래스의 각 생성자에 대해, 함께 실행할 슈퍼 클래스의 생성자를 지정하여아 한다.  
        * 슈퍼 클래스의 기본 생성자가 호출되도록 컴파일한다.  
1. 슈퍼 클래스의 기본 생성자가 묵시적으로 선택  
    * 슈퍼 클래스의 생성자로 **기본 생성자**가 선택된다.  
    * 이 선택은 **자바 컴파일러**에 의해 묵시적으로 이루어진다.  
2. super()를 이용하여 명시적으로 슈퍼 클래스의 생성자 선택  
    * 서브 클래스의 생성자에서 슈퍼 클래스의생성자를 명시적으로 선택하는 것이 원칙이다.  
    * super()를 이용하면, 서브 클래스의 생성자에서 슈퍼 클래스 생성자를 명시적으로 선택할 수 있다.  
    * [super()는 **슈퍼 클래스의 생성자의 호출**을 의미함]  
9. 업캐스팅  
* 캐스팅이란 타입 변환을 말한다.  
    1. 업캐스팅  
    * 서브 클래스의 레퍼런스를 슈퍼 클래스 레퍼런스에 대입  
    * 슈퍼 클래스 레퍼런스로 서브 클래스 (객체를 가리키는 현상)  
    2. 다운캐스팅  
    * 슈퍼 클래스 레퍼런스를 서브 클래스 레퍼런스에 대입
    * 업캐스팅된 것을 다시 원래대로 돌리는 것  
    * 반드시 면시적 타입 변환 지정  
10. instanceof 연산자와 객체 구별  
* 업캐스팅을 한 경우 레퍼럼스가 가리키는 객체의 진짜 클래스 타입을 구부나기 어렵다.  
* 서브 클래스의 객체를 생성하고 업캐스팅을 통해 슈퍼 클래스의 레퍼헌스로 가리킬 수 있다.  
    1. instanceof 연산자 사용  
        * 레퍼런스가 가리키는 객체의 타입을 식별  
11. 메소드 오버라이딩  
    * 서브 클래스에서 슈퍼 클래스의 메소드 중복 작성  
    * 슈퍼 클래스의 메소드 무력화, 항상 서브 클래스에 오버라이딩한 메소드가 실행된다.  
    1. 오버라이딩 조건
        * 서브 클래스에 오버라이징한 메소드는 반드시 슈퍼 클래스에 작성된 메소드의 이름, 리턴 타입, 매개 변수 리스트가 모두 같도록 작성되어야 한다.  
12. 오버라이딩의 목적 다형성 실현  
* 하나의 인터페이스에 서로 다름 구현  
* 슈퍼 클래스의 메소드를 서브 클래스에서 각각 목적에 맞게 다르게 구현  
13. 동적 바인딩  
* 오버라이딩 메소드가 항상 호출되는것  
14. super 키워드  
    * 슈퍼 클래스의 멤버를 접근할 때 사용되는 레퍼런스  
    1. 서브 클래스에서만 사용  
    2. 슈퍼 클래스의 필드 접근  
    3. 슈퍼 클래스의 메소드 호출시  
    4. super롤 이루어지는 메소드 호출:정적 바인딩  
15. 추상 클래스  
1. 추상 메소드
    * abstract로 선언된 메소드,메소드의 코드는 없고 원형만 선언  
2. 추상 클래스  
    * 추상 메소드를 가지며, abstract로 선언된 클래스  
    * 추상 메소드 없이, abstract로 선언한 클래스  



## 4월 5일 강의 내용
1교시  
1. 매소드와 배열 리턴  
* **배열에 대한 레퍼런스는 리턴**한다.  
* 러턴 타입에 배열의 크기를 지정하지 않는다.  
2. 자바의 예외 처리  
* **예외** : 실행 중 오동작이나 걸과에 앚영향을 미치는 예상치 못한 상황 발생  
    * 자바 응용프로그램에게 예외를 전달하여 응용프로그램이 예외에 대응하게 한다.  
* 예외 발생 경우 3가지  
    1. 정수를 0으로 나누는 경우  
    2. 배열의 키기보다 큰 인덱스롤 배열의 원소를 접근하는 경우  
    3. 정수를 읽는 코드가 실행되고 있을 때 사용자가 문자를 입력한 경우  
3. 자바의 예외 처리, try-catch-finaly 문  
* **예외 처리** : 발행한 예외에 대해 개발자가 작성한 프로그램 내에서 대응하는 것  
* 예외 처리 시 try-catch-finaly 문을 사용한다.  
4. 자바으 예외 클래스  
* 자바 플랬폼은 응용프로그램이 실행 중 오류를 탐지할 수 있도로 많은 예외를 클래스형태로 제공한다.  
4장  
1. 객체 지향과 자바  
* 고우한 특성과 행동을 가지며 다른 객체들에게 행동을 요구하거나 정보를 주고받는 등 상효 작영하면서 살아가며,  
* 테트리스 게임에 나오는 각 블록들, 한글 프로그램의 메뉴나 버튼들이다.  
2. 자바의 객체 지향 특성  
    * 캡슐화 : 객체를 캡슐로 짜서 그 내부를 보호하고 볼 수 없게 하는것. **객체의 가장 본직적인 특성**  
    * 클래스  
        * 객체의 모양을 선언한 틀  
        * 모양 그애로 생성된 실체  
    * 상속 : 상위 개체의 속성이 하의 개체에 물려져서 하위 개체가 상위 개체의 속성을 모두 가지는 관계  
        * 자식 클래스가 부모 클래스의 속성을 물려받아 부모 클래스에 기능을 확장 하는 개념  
        * 자식 클래스를 **서브 클래스** 하고 부른다.  
    * 다향성 : 이름의 메소드가 클래스 혹은 객체에 따라 다르게 구현 되는 것  
        * 슈퍼 클래스에 구현된 메소드를, 서브 클래스에서 자신의 특징에 맞게 동일한 이름으로  다시 구현하는 이른바 **메소드 오버라이딩** 으로 부른다.  
        * 클래스 내에서 같은 이름의 메소드를 여러 개 만드는 **메소드 오버로딩**이 있다.  
    * 소프트웨어으 생산성 향상  
        * 컴퓨터 산업이 발전함에 따라 소프트웨어의 생명주기(life cycle)가 짧아졌으며,  
        * 객체 지향 언어는 객체, 캡슐화, 상속, 다향성 등 소프트웨어의 재사용을 위한 여러 기법을 내장  
        * 소프트웨어를 상속받거나 재사용하기 쉬어며, 부분 수정을 통해 소프트웨어를 작성하는부담을 대폭 줄일 수 있다.  
3. 절차 지향 프로그래밍과 객체 지향 프로그래밍  
* 절차 지향 프로그램
    * C언어처럼 실행하고자 하는 절차를 정하고 이 절차대로, 프로그래밍하는 방법  
* 객체 지향 프로그램   
    * 실세상의 물체를 객체로 표현하고 사이의 관계 상호작용을 프로그램으로 나타낸다.  
4. 클래스와 객체  
* 클래스  
    * 객체를 만들어 내기 위한 설계 혹은 틀  
    * 클래스에 선언된 모양 그애로 생성된 실체  
    * 객체를 클래스의 **인스턴스** 라고 부른다.  
5. 자바 클래스 구성  
* 자바에서 class 키워드로 클래스를 선언한다.
    * 클래스 구성  
        * 클래스는 class 키워드와 클래스 이름으로 선언하고 중괄호({}) 안에 클래스의 필드와 메소드를 모두 작성해야 한다. 클래스 외부에 필드나 메소드를 결코 둘 수 없다.
    * 클래스 멤버  
        * 클래스의 멤버는 필드와 메소드로서, 필드는 객체의상태 값을 저장할 멤버 변수이며 메소드는 실행 가능한 함수이고 객체의 행위를 구현한다. getArea() 메소드는 원 내무의 반지름 정보를 이용하여 변적을 계산하여 알려준다.
    * 접근 지정자  
        * 클래스의 선언부 앞에 붙여진 public은 접근지정자로서, Circle 클래스를 다른 클래스에서 이용할 수 있음을 지정한다. 멤버를 public으로 선언하면 다른 클래스에서 마음대로 호출하서나 접할 수 있도록 공개한다는 뜻이다.  
6. 생성자  
* 객체가 생성될 때 초기화를 위해 실행되는 메소드  
7. 생성자 작성 및 활용  
* 객체가 생성되는 순간에 자동으로 호출되는 메소드  
    1. 생성자의 이름은 클래스 이름과 동일하다.
        * 반드시 클래스의 이름과 동일하게 작성되어야 한다.   
    2. 생성자를 여러 개 작성할 수 있다. 
    3. 생성자는 객체를 생성할 때 한 번만 호출된다.
    4. 생성자에 리턴 타임을 지정할 수 없다.  
    5. 생성자의 목적은 객체가 생성될 때, 필요한 초기 작업을 위함이다.  
8. 기본 생성자  
* 매개 변수가 없고 또한 실행 코드가 없어 아무일도 하지 않고 단순 리턴하는 생성자이다. 
    1. 기본 생성자가 자동으로 생성되는 경우  
        * 클래스에 생성자가 하나도 선언되어 있지 않은 경우, 컴파일러는 기본 생성자를 자동으로 생성한다.  
    2. 기본 생성자가 자동으로 생성되지 않은 경우  
        * 생성자가 하나라도 존대하는 클래스에는 컴파일러가 기본 생성자를 임의로 삽입해 주지 않는다. 배개 변수를 가진 Circle(int r)생성자를 호출한다.  
9. this 레퍼런스  
* 컴파일러에 의해 자동으로 관리되므로, 개발자는 사용하기만 하면 된다.  
10. this()로 다른 생선자 호츨  
* 클래스 생성자가 다른 생성자를 호출할 때 사용하는 자바 코드이다.  
11. 객체 배열  
* 레퍼런스를 원소로 갖는 배열
    * 배열 선언 및 생성  
        1. 배열에 해한 레퍼러스 선언
        2. 레퍼런스 배열 생성  
        3. 객체 생성  
12. 접근 지정자  
* 자바에서 메소드는 반드시 접근 지정자와 함께 선언되어야 한다.
* '디폴트 접근 지정'의 경우 동일한 패키지 내의 모든 클래스에서 호출 가능하다.  
13. 러턴 타입  
* 메소드가 호출자에게 리턴할 값의 타입이다. 
    1. 인지전달  
    : 자바의 호출 시 인자 전달 방식은 '값에 의한 호출'  
14. 기본 타입의 값이 전달되는 경우  
    * 매개 변수가 byte, char, int, double 등 기본 타입으로 선언되는 경우, 호출자가 건네는 값이 메소드의 매개 변수에 복사되어 전달한다.  
15. 객체가 전달되는 경우  
    * 객체가 아니라 **객체의 레퍼런스 값이 전달한다**.  
16. 배열이 전달되는 경우  
    * 배열이 통째로 전달되는 것이 아니라 **배열에 대한 래퍼런스만 전달된다**.  
17. 메소드 오버로딩  
* 클래스 니에 이름이 같지만 매개 변수의 타입이나 개수가 서로 다른 여러개의 메소드를 작성할 수 있다.  
    * 매소드 오버로딩이 성립되는 2가지 조건  
        1. 메소드 이름이 동일하여야 한다.  
        2. 메소드 매개 변수의 개수나 타입이 서로 달라야 한다.  
    * **리턴 타입은 오버로딩의 성공을 판단하는것과 무관하다**  
18. 객체의 소멸과 가비지 컬렐션  
1. 객체의 소멸  
    * 객체를 생성하는 new 연산자는 있지만 객체를 소멸키시는 연산자는 없다.  
    * 개발자가 마음대로 객체를 소멸시킬 수 없다.  
2. 가비지  
    * 할당받은 객체나 배열 메모리 중에서 더이상 사용하지 않게 된 메모리  
3. 가비지 컬렉션  
    * 가용 메모리 공간이 일정 크기 이하로 줄어들면 자바 가상 기계는자동으로 가비지를 회수하여 가용 메모리 공간을 늘린다.  
4. 가비지 컬렉션 강제 수행  
    * System 또는 Runtime 객체의 gc() 메소드를 호출하여, 자바 플랫폼에 가지비 컬렉션을 요청할 수 있다.  
    * 가비지 켤렉션은 자바 가상 기계가 전적으로 판단하여 적절한 시점에 작동  
19. 접근 지정자  
    1. 자바의 패키지 개념  
        * 상호 관견 있는 클래스 파일들을 패키지에 저장하여 관리한다. 디렉터리 혹은 폴저와 같은 개념  
    2. 접근 지정자  
        * 클래스나 맴버들을 다른 클래스에서 접근해도 되는지의 여부를 선언
        * **private,protected,public,접근 지정자 생략(디폴트 접근 지정)**  
    3. 클래스 접근 지정  
        * 클래스를 작성할 때 다른 클래스가 사용해도 되는지 허용 여부를 지정  
    * public 클래스  
        * 다른 어떤 클래스에게도 사용이 허용된다.  
    * 디폴트 클래스(접근 지정자 생략)  
        * 같은 패케제 내에 있는 클래스들에게만 사용이 허용된다.  
    * public 맴버  
        * 패키지를 막론하고 모든 클래스들이 접근 가능하다.  
20. static 멤버  
    1. static 맴버 선언
        * 클래스의 맴버들 중 다음과 같이 static 지시어로 선언된 맴버
        * 클래스당 하나만 생성  
        * 객체마다 별도로 생기므로 **인스턴스 맴버**라고 부른다.  
        * 객체의 맴버러 접근할 수 있다.  
        * 클래스 이름으로 접근할 수 없다. 




## 3월 29일 강의  
1교시
1. System.in  
* 키보드 장치와 직접 연결되는 **표준 입력 스트림** 객체로, 키 값 바이트 정보로 바꾸어 제공하는 저수준 스트림이다.  
2. Scanner  
* System.in으로 하여금 키보드로부터 입력을 받게 하고, System.in이 반황하는 바이트 스트림을 응용프로그램의 입맛에 따라 문자, 문자열, 정수, 실수 등으로 변환하여 리턴한다.  
3. inport  
* Scanner 클래스의 경로명이 java.util.Scanner임을 알려준다. 
* Scanner 클래스는 사영자가 입력하는 키 값을 공백('\f', '\r',' ', '\n')으로 구분되는 **토큰 단위**로 읽는다.  
---
4. 식과 연산자  
* 주어진 식을 계산하여 결과를 얻어내는 과정을 **연산**이라고 한다.  
5. 산술 연산  
* 산술 연산자는 더하기(+), 뺴기(-), 곱하기(x), 나누기(/), 나머지(%)의 5개이다.  
6. 증간 연산  
* 증간 연산자는 ++,--의 두가지이며, 피연산자의 앞 또는 뒤에 붙어 값을 1증가시키거나 1감소시킨다.(i++,i--,++i,--i)  
7. 대입 연산  
* 연산자의 오른쪽 식의 결과를 왼쪽에 있는 변수에 대입한다.  
```  
a=b : b의 값을 a에 대입  a&=b : a=a&b와 동일
a+=b : a=a+b와 동일  a^=b : a=a^b와 동일
a-=b : a=a-b와 동일  a|=b : a=a|b와 동일
a*=b : a=a*b와 동일  a<<=b : a=a<<b와 동일
a/=b : a=a/b와 동일  a>>=b : a=a>>와 동일
a%=b : a=a%b와 동일  a>>>=b : a=a>>>b와 동일  
```  
8. 비교연산, 논리 연산
* 두개의 피연산자를 비교하여 true 또는 false의 논리 결과를 내는 연산자.  
* 논리 값을 대상으로 AND, OR, XOR, NOT의 논리 연산을 하여 논리 값을 내는 연산자이다.  
9. 조건 연산
* 피연산자로 구성되어 삼항 연산자라고도 한다.  
10. 비트 연산  
* 비트끼리 AND, OR, XOR, NOT연산을 하는 비트 논리 연산과, 비트를 오른쪽이나 왼쪽으로 이동시키는 비트 시프트 연산이 있다.  
---  
1. 조건문  
* 조건문을 이용하면 조건의 참 거짓에 따라 서로 다른 작업을 수행할 수 있다.  
2. if-else 문  
* if의 '조건식'이 참인 경우와 거짓인 경우에 실행할 문장을 각각 지시한다.  
3. 다중 if-else 문  
* '조건식'이 탐인 경우, 새당하는 '실행 문장'을 실행한 후 다중 if-else 전체를 벗어난다.  
4. switch 문  
* 값과 일치하는 case 문으로 분개한다.  
* case문의 '실행 문장'을 실행한 후 break를 만나면 switch 문을 벗어난다.  
* 어떤 case 문의 값과도 같지 않은 경우, dafault 문으로 분기하여 '실행 문장 n'을 실행한다.  
5. case 문에 지졍하는 값은 **정수 리터럴**, **문자 리터럴**, **문자열 리터럴**만 혀용한다.  
---
 3장 반복문  
1. for 문  
* 가장 많이 사용되는 for 문의 구성  
2. while문  
* true인 경우 반복이 계속되며, false인 경우 while 문을 벗어난다.  
3. do-while 문  
* '작업문' 실행 후 반복 조건을 따지므로, '작업문이' 최초 한번은 반드리 실행된다.  
4. 중첩 반복  
* 반복문 안에 다른 반목문을 만들 후 있다.  
5. continue 문  
* 반복문으 빠져나가지 않으면서 즉시 다음 반복으로 넘어가고자 할 때 사용.  
6. break 문  
* 반복문을 즉시 벗어날 때 사용.
* 중첩 반복의 경우 안쪽 반복문에서 break 문이 실행되면, 안똑 반복문만 벗어나며 바깥 쪽 반복문 내에서 실행 유지된다.  
7. 배열  
* 인덱스와 인덱스에 대응하는 인련의 데이터들로 이루어진 연속적인 자료구조  
* 배열에는 같은 종류의 데이터들이 순차적으로 저장된다.  
8. 배열 선언 및 생성  
* C/C+와 달리 레퍼런스 변수 선언과 배열 생성의두 단계가 필요하다
```  
    1.배연셍성
    :배열 공간을 할당받는 과정이다. 
    2.배열 초기화 
    :배열 선언문에서'{ }' 사이에 원소를 나여라여 초리과된 배열을 만들 수 있다.  
```  
9. 배열 인덱스와 배열 원소 접근  
* 배열의 인덱스는 정수만 가능하다.
* 인덱스는 0부터 시작하며 마지막 원소의 인덱스는 {배열 크기-1}이다.  
10. 레퍼런스 치환과 배역 공유  
* 레퍼런스 변수가 분리되어 있기 때문에 생성된 배열에 대한 공유가 쉽게 이루어진다.
11. 배열의 크기, length 필드  
* 자바는 배열을 객체로 다룬다.  
* 배열 공간과 함께 배열의 키기 값을 가진 length 필드가 배열 객체 내에 생성된다.  
* length 필드를 이용하면 프로그램에서 배열의 키기를 따로 관리할 필요가 없다.  
12. 배열과 for-each 문  
* for문을 변형한 for-each 문은 배열이나 나열의 크기만큼 루프를 돌면서, 각 원소를 순차적으로 접근하는데 매우 유용한다.
13. 2차원 배열  
``` java
int intArray[][]; 또는 [][] intArray;
int intArray = new int[2][5];
int intArray[][] = new int[2][5];
```  
14. 2차원 배열의 초기화  
* 2차원 배열을 선언항 때 각 원소를 초기화할 수 있다. 이때 자동으로 초기화된 배열이 생성된다.  
``` java  
int intArray[][] = { {0,1,2}, {3,4,5}, {6,7,8} };
char charArray[][] = { {'a','b','c'}, {'d','e','f'} };
double doubleArray[][] = { {0.01,0.02}, {0.03,0.04} };
```  
## 3월 22일 강의
* 1교시
1. Git Graph에서 버전을 설정한다.  
2. ctrl + shipt + p 를 눌러서 > java pro를 입력한 다음에 java 프로잭트를 생성한다  
3. 폴더를 선택한다.  
4. 프로젝트 이름을 입력한다. 
5. README.md를 제외한 폴더 4개를 복사한다.  
6. 소스코드를 새롭게 만들고 코드를 작성한다.  
---  
* 2교시  

 1장
1. 프로그래밍 언어의 설명 (교재p19참고)  
    * 기계어  
    * 어셈블리어  
    * 고급언어  
2. 프로그래밍 언어 진화 과정 (교재p19참고)  
3. 프로그래밍과 컴파일  
    * 소스 : 프로그래밍 언어로 작성된 텍스트 파일  
    * 컴파일 : 소스파일을 컴퓨터로 번역하는 것  
4. 자바의 태동  (교재 p21 참고)  
---
5. 자바의 플랫폼 독립성,WORA  
    * WORA : 한번 작성된 코드는 모든 플랫폼에서 바로 실행되는 자바의 특증  
    * C/C++들 기존언어가 가진 플랫폼 종속성 극복  
    * 네트워크에 연결된 어느 클라이언트에서나 실행  
 ---
6. WORA를 가능하게하는 자바의 특징(교재p23참고)  
---
7. 바이트 코드   
    * 자바 컴파일러가 자바 소스 프로그램을 컴파일한 일종의 기계어로서, 자바 가상기계에 의해 실행되는 바이너리 코드이다.  
---
8. 자바 응용프로그램 실행 환경 (교재 p25 참고)
---

9. JDK, JRE  
    * Jdk : 자바 응용 개발 환경, 개발에 필요한 도구 포함  
    * JRE : 자바 응용프로그램이 싱행된때 필요한 소프트웨어들로 개발자가 활용할 수 있는 자바 API와 자바 가상기계를 포함한다.  
---
10. 자바의 특징  

    * 플랫폼 독림성  
    : 자바는 하드웨어, 운영체제 등 플랫폼에 좃속된지 않는 독림적인 바이트 코드로 컴파일되며 자바 가상 기계만 있으면 하드웨어/운영체제를 막론하고 자바 프로그램의 실행이 가능하다.  
    ---
    * 객체 지향  
    : 자바는 객체 지향 언어로서 캡슐화, 상속 다형성 등을 지원한다. 객체 지향 프로그램은 해곃할 과제를 실제 세상의 객체 간의 상호 관계로 모델링하여 인간의 사고에 가깝게 표현한다.  
    ---
    * 클래스로 캡슐화  
    : 자바는 객체 지향 언어의 캡슐화 원칙을 철저히 지켜, 변수나 메소드는 반드시 클래스 내에 구현하도록 한다. 클래스에 속하지 않은 변수나 메소드는 있을수 없다. 자바는 클래스 안에 새로운 클래스, 즉 **내부 클래스**를 만들 수 있다.  
    ---
    * 소스와 클래스 파일  
    자바 소스가 컴파일된 클래스 파일(.Calss)에는 반드시 하나의 자바 클래스만이 들어있다. 그러므로 하나의 자바 소스 파일에 여러 개의 클래스를 작성한 경우, 컴파일하면 클래스마다 별도의 클래스 파일이 생성된다.  
    ---  
    11. 자바 에센셜  
    * 실행 코드 배포 : 자바 응용프로그램은 한 개의 클래스 파일 또는 다수의 클래스 파일로 구성된다.  
    * 패키지 : 서로 관련 있는 클래스는 패키지로 묶어 관리한다.  
    * 멀티스레드 : 하나의 자바 프로그램에서 다수의 스레드가 동시에 실행할 수 있는 환경을 지원한다.  
    * 가비지 컬랜션 : 자바 언어는 메머리를 할당받는 기능은 있지만, 메모리를 반환하는 기능은 없다.프로그램 내에 사용되지 않는 메모리는 자바 가상 기계의 가비지 컬렉션 기능에 의해 자동으로 회수한다.  
    ---
    (단점)  
    * 실시간 응용 시스템에 부적합 : 자바 응용프로그램은 실행 도중 예측할 수 없는 시점에 가비지 컬렉션이 실행되므로, 프로그램 실행이 일시적으로 중단된다.  
    * 자바 프로그램은 안전하다 : 자바 언어는 타임 체크가 매우 엄격하며, C.C++와 달리 메모리의 물러적 주소를 사용하는 포인터의 개념이 없기 때문에, 잘못된 자바 프로그램으로 인해 컴퓨터 시스템이 중단되는 일은 없다.  
    * 프로그램 작성이 쉽다 : 프로그맴 개발을 귑게 도와주는 다양한 라이브러리와 스윙 등 강력한 GUI 라이브러리를 자원하므로 프로그램 작성이 빠르고 쉽다.  
    * 싱행곳도를 개선하기 위해 JIT 컴파일러가 사용된다 : 자바는 바이트 코드를 인터프리터 방식으로 실행한다.  

2장  
1. 클래스 만들기  
    * 자바에서는 클래스를 만들고, 그 안에 변수, 상수, 함수(메소드) 등 모든 프로그램 요소를 작성한다.  
2. 주석문  
    * 개발자가 프로그램에 대한 설명이나 특이 사항 등을 자우롭게 덧붙일 때 사용한다.      
    // : 한 라인 주석, 행이 끝날 때까지 주석으로 처리  
    /*  
    : 여러 라인 주석으로 /* 와 */로 구성  
    .............  
    */  
3. main()메소드  
    * 자바 프로그램은 main()메소드에서부터 실행을 시작한다.  
4. 메소드
    * C/C++함수를 자바에서는 메소드라고 부르며, 작성 방법이나 호풀 방법은 C/C++ 함수와 거의 같지만, 반드시 클래스 내에 작성되어야 한다.
5. 메소드 호출
    * 다음은 변수 1의 값과 정수 10을 매개변수로 넘겨주는 sum() 호출문의 사례이다.  
    [s=sum(i,10);  // sum() 메소드의 매개변수 n, m에 각각 i 값과 10 전달]  
6. 변수 선언  
    * 변수란 데이터를 저장하는 공간이며 사용 밒 선언 방법이 C/C++와 동일하다.  
7. 문장  
    * 자바에서 모든 문장은 C/C++와 동일하게 다음과 같이 ';'로 끝나야 한다.  
    **[ int i=10;  
    s = sum(i,10); ]**  
8. 화면출력  
    * 정수,문자,문자열 등 데이터를 출력하기 위해  
    System.out.println();를 이용한다  

2-2장  
1. 식별자 이름 규칙  
:자바에서 식별장=를 만들때 다음 구칙을 준수하여야 한다.  
* 특수문자( % , * , & , @ , ^ 등), 공백(탭 , space 등)은 식별자로 사용할 수 없으나 '_','$'는 예외다.  
* 식별자로 한글을 사용할 수 있다.  
if, while, class등 자바 언어의 키워드는 식별자로 사용할 수 없다.  
* 식별자의 첫 번째 문자로 숫자는 사용할 수 없다.  
* true, false, null은 식별자로 사용할 수 없다.  
대소문자를 구별한다.  
* 길이 제한이 없다.  

2-3장  

2. 데이터 타임이란 자바에서 다룰 수 있는 데이터의 종류를 말한다.  
    레퍼런스란 C/C++의 포인터와 비슷한 개념이다.  
    * 기본타입 : boolean, char, short, int, long, float, double  
    * 레퍼런스 타입 : 레퍼런스 타입은 한 가지이지만 다음 세경우로 이용한다.  
    1. 배열에 대한 레퍼런스  
    2. 클래스에 대한 레퍼런스  
    3. 인터헤이스에 대한 레퍼런스  
3. 자바의 기본 타입  
    * 자바의 기본 타입과 메모리 공간, 데이터 값의 범위를 보여준다.  
    1. 정수 타입 : byte, short, int, long  
    2. 실수 타입 : float, double  
    3. 문자 char 타입 : 2바이트  
4. 문자열  
    * 자바에서 문자열은 기본 타입에 속하지 않으며, JDK에서 제공하는 String 클래스를 이용한다.  
    * 자바에서 다음과 같이 문자열과 기본 타입의 + 연산으로 문자열을 연결한 새로운 문자열을 생성한다.  
5. 변수와 선언  
    * 변수는 데이터를 저장하는 공간이다. 따라서 변수를 선언하면 변수의 타입 크기에 맞는 메모리 공간이 할당된다.  
6. 리터럴  
    * 리터럴이란 프로그램에 직접 표현한 값을 말한다. 정수, 실수, 문자, 논리, 문자열 타입 모두 리터럴이 있다.  
    1. 정수 리터럴 : 정수 리터럴은 4가지 유형이 있으며 변수와 함께 사용한다.  
    **int n = 15; // 십진수 15  
    int m = 015; // 015는 8진수로서 십진수 13  
    int k = 0x15; // 0x15는 16진수로서 십진수 21  
    int b = 0b0101; // 0b0101은 2진수로서 십진수 5**  
    2. 실수 리터럴 : 실수 리터럴은 소수점 형재나 지수 형태로 실수를 표현한 값 이다.  
    **12 .  12.0 .1234 0.1234 1234E-4**  
    * 실수리터럴은 double 타입으로 자동 처리  
    * 숫자 위에 f 또는 F를 붘이면 float 타입, d 또는 D를 붙이면 double 타입으로 강제 변환  
    3. 문자 리터럴 : 문자 리터럴은 단일 인용부호('')로 문자를 표현하거나 \n 다음에 문자의 유니코드 값을 사용하여 표현  
    'a','w','가','*','3','글'  
    * 특수문자 리터럴  


## 3월 15일 강의  
내용정리

## 3월 8일 강의
# markdown-문법-정리  
# h1
## h2
### h3
#### h4
##### h5
###### h6
일반 글씨는 h4정도 크기  <br><br>
크기개행(newline)을 할때는 스페이스 2개  
  
 *이탤릭체*  
 **굵게**  
***이텔릭+굵게***  
  
# 리스트  
1. 첫 번째  
2. 두 번째  
3. 세 번째  
  
* 첫 번째  
    * 두 번째  
        * 세 번째  
  
# 코드 블럭  
```java
public class Main { 
    public static void main(String[] args) { 
        System.out.println("Hello World"); 
   }
}
```  
# 링크  
[구글 링크](https://www.google.com)  
[폰트 관련 명령](#markdown-문법-정리)  
![상대경로](./20210525051115632cebl.jpg)  
![절대경로](https://th.bing.com/th/id/OIP.aSM0l666ifQ_2L0uu13zIgHaIH?rs=1&pid=ImgDetMain)  
  
# 라인  
---  
***  
