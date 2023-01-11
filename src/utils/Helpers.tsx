export const useDefaultProps = <T, U extends Partial<T> = {}>(
    defaultProps: U,
    props: T
  ) => {
    return { ...defaultProps, ...props };
  };