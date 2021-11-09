import useEffectOnce from '../useEffectOnce';
import useUpdateEffect from '../useUpdateEffect';

function useLogger(componentName: string, ...ret): void {
  useEffectOnce(() => {
    console.log(`${componentName} mounted`, ...ret);
    return () => console.log(`${componentName} unmounted`);
  });

  useUpdateEffect(() => {
    console.log(`${componentName} updated`, ...ret);
  });
}

export default useLogger;
