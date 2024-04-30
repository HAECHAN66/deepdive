// 예제 25-38
// 자바의 클래스 정의
public class declare {
    // 1 클래스 필드 정의
    // 클래스 필드는 몸체에 this없이 선언해야 한다.
    private String firstName ="";
    private String lastName ="";
  
    // 생성자
    declare(String firstName, String lastName){
      // 3. this는 언제나 클래스가 생성할 인스턴스를 카리킴
      this.firstName = firstName;
      this.lastName = lastName;
    }
    public String getFullName() {
      // 2. 클래스 필드 참조
      // this없이도 클래스 필드를 참조 가능
      return this.firstName + "" + this.lastName;
    }
  }