// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class UniAdminTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void uniAdmin() {
    // Test name: UniAdmin
    // Step # | name | target | value | comment
    // 1 | open | / |  | 
    driver.get("https://campus-connect-ecru.vercel.app/");
    // 2 | setWindowSize | 1268x652 |  | 
    driver.manage().window().setSize(new Dimension(1268, 652));
    // 3 | click | css=a:nth-child(3) > .MuiButtonBase-root |  | 
    driver.findElement(By.cssSelector("a:nth-child(3) > .MuiButtonBase-root")).click();
    // 4 | click | id=search |  | 
    driver.findElement(By.id("search")).click();
    // 5 | click | id=search |  | 
    driver.findElement(By.id("search")).click();
    // 6 | type | id=search | DA-IICT | 
    driver.findElement(By.id("search")).sendKeys("DA-IICT");
  }
}
