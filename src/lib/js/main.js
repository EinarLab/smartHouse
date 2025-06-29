let observer;
let colorTheme = "white";


export function smoothScrollToHeading(headingId) {
    const heading = document.querySelector(`h1#${headingId}`);
    if  (heading) 
    {
        heading.scrollIntoView({ behavior: "smooth" });
    }
}

export function initIntersectionObserver() {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeIn');
      } 
    //   else {
    //     entry.target.classList.remove('animate__animated', 'animate__fadeIn');
    //   }
    });
  });

  const animatedDivs = document.querySelectorAll('.animated');
  animatedDivs.forEach((div) => {
    observer.observe(div);
  });
  
  return () => {
    animatedDivs.forEach((div) => {
      observer.unobserve(div);
    });
  };
}

export function SwitchTheme() {

  const item = document.getElementById("wrapper");
  const categoryItem = document.querySelectorAll(".categories__item_img"); 

  if (colorTheme == "white") {
    item.style.setProperty("--body-background-color", "#0f172a");
    item.style.setProperty("--secondary-color", "#16213b");
    item.style.setProperty("--accent-color", "#E3B201");
    item.style.setProperty("--text-color", "#fff");
    item.classList.remove("animate__animated", "animate__fadeIn");
    item.classList.add("animate__animated", "animate__flash");
  
    for (let index = 0; index < categoryItem.length; index++) {
      const element = categoryItem[index];
      element.style.filter = "invert(100%)";
    }

    colorTheme = "dark";
    alert("Вы разбили нашу лампочку");
    return colorTheme;
  }
  if (colorTheme == "dark") {
    item.style.setProperty("--body-background-color", "#fff");
    item.style.setProperty("--secondary-color", "#eef9ff");
    item.style.setProperty("--accent-color", "#025e94");
    item.style.setProperty("--text-color", "#000");
    item.classList.remove("animate__animated", "animate__flash");
    item.classList.add("animate__animated", "animate__fadeIn");

    for (let index = 0; index < categoryItem.length; index++) {
      const element = categoryItem[index];
      element.style.filter = "none";
    }

    colorTheme = "white";

    alert("Мы заменили лампочку на новую");
    return colorTheme;
  }
}

export async function SendMessage(event) {
    const name = document.getElementById("user__name").value;
    const contact = document.getElementById("user__contact").value;

    const response = await fetch('http://localhost:3000/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, contact })
    });

    if (response.ok) {
      alert('Сообщение успешно отправлено!');
    } else {
      alert('Произошла ошибка при отправке сообщения.');
    }
}