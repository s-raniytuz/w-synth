/*eslint-disable*/
import { useEffect } from "react";
export default function useMountEffect(f: Function) {
  useEffect(() => {
    f();
  }, []);
}
