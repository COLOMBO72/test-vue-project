export default {
  mounted(el,binding){
    // При скролле подгружать страницы!!!
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries,observer) => {
      if(entries[0].isIntersecting){
        binding.value()
      }
    }
    const observer = new IntersectionObserver(callback,options); 
    observer.observe(el);
    // !При скролле подгружать страницы!!!
  },
  name: 'intersection'
}