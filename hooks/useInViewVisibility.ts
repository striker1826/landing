import { useEffect, useRef, useState } from "react";

const useInViewVisibility = (
  threshold: number = 0.3
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const elementRef = useRef<HTMLDivElement>(null); // HTMLDivElement로 고정
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;

      if (scrollY + windowHeight < elementTop + elementHeight * 0.3) {
        setVisible(false); // 컴포넌트보다 위에 있을 때
      } else {
        setVisible(true); // 컴포넌트와 겹치거나 아래에 있을 때
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 체크

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [elementRef, isVisible];
};

export default useInViewVisibility;
