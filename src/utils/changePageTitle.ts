export const changePageTitle = (page: "login" | "home") => {
   let link: any = document.querySelector("link[rel~='icon']");
   let pageTitle = "";
   let imagePath = "";
   if (page === 'home') {
      pageTitle = "Приват 24";
      imagePath = "./logo.png";
   } else if (page === 'login'){
      pageTitle = "Добро пожаловать!";
      imagePath = 'https://stackoverflow.com/favicon.ico';
   }
   document.title = pageTitle;
   if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
   }
   link.href = imagePath;        
}