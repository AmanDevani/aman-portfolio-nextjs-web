import { cva } from 'class-variance-authority';

const typography = cva('break-words', {
  variants: {
    variant: {
      p: 'text-base font-normal leading-base',
      h1: 'text-h1 font-bold leading-h1',
      h2: 'text-h2 font-bold leading-h2',
      h3: 'text-h3 font-bold leading-h3',
      h4: 'text-h4 font-bold leading-h4',
      h5: 'text-h5 font-bold leading-h5',
      h6: 'text-h6 font-bold leading-h6',
      label: 'text-label-base font-normal leading-label-base',
    },
    size: {
      sm: 'text-sm leading-sm',
      md: 'text-md leading-md',
      lg: 'text-lg leading-lg',
      base: 'text-base leading-base',
      meta: 'text-meta leading-meta',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    family: {
      primary: 'font-primary',
      secondary: 'font-secondary',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
  },
  compoundVariants: [
    {
      variant: 'label',
      size: 'base',
      className: 'text-label-base leading-label-base',
    },
    {
      variant: 'label',
      size: 'sm',
      className: 'text-label-sm leading-label-sm',
    },
    {
      variant: 'label',
      size: 'meta',
      className: 'text-label-meta leading-label-meta',
    },
  ],
});

const Typography = ({
  className,
  variant,
  fontWeight,
  size,
  family,
  ...rest
}) => {
  const Tag = variant ?? 'p';

  return (
    <Tag
      className={typography({
        variant,
        weight: fontWeight,
        size,
        family,
        className,
      })}
      {...rest}
    />
  );
};

export default Typography;
