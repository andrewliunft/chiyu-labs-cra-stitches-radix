import { ReactNode, ComponentProps, ElementType, forwardRef } from 'react';
import { styled } from '@styles/stitches.config';

const Text = styled('span', {
  color: 'inherit',
  variants: {
    variant: {
      h1: { fontSize: '3.75rem', lineHeight: 1 },
      h2: { fontSize: '3rem', lineHeight: 1 },
      h3: { fontSize: '2.25rem', lineHeight: '2.5rem' },
      h4: { fontSize: '1.875rem', lineHeight: '2.25rem' },
      h5: { fontSize: '1.5rem', lineHeight: '2rem' },
      h6: { fontSize: '1.25rem', lineHeight: '1.75rem' },
      subtitle: { fontSize: '1.125rem', lineHeight: '1.5rem' },
      body: { fontSize: '1rem', lineHeight: '1.5rem' },
      caption: { fontSize: '0.875rem', lineHeight: '1.25rem' },
      comment: { fontSize: '0.75rem', lineHeight: '1rem' },
      button: { fontSize: '1rem', lineHeight: '1.5rem' },
      link: { fontSize: '1rem', lineHeight: '1.5rem' },
    },
    weight: {
      normal: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      bold: { fontWeight: 700 },
      black: { fontWeight: 900 },
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'normal',
  },
});
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TypographyVariant = HeadingTag | 'subtitle' | 'body' | 'caption' | 'comment' | 'button' | 'link';
const TypographyTagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'p',
  body: 'p',
  caption: 'p',
  comment: 'p',
  button: 'span',
  link: 'span',
};

interface TypographyProps extends ComponentProps<typeof Text> {
  as?: ElementType;
  children: ReactNode;
  variant?: TypographyVariant;
}

const Typography = forwardRef<HTMLSpanElement, TypographyProps>(({ variant = 'body', children, ...restProps }, ref) => {
  return (
    <Text ref={ref} as={TypographyTagMap[variant]} variant={variant} {...restProps}>
      {children}
    </Text>
  );
});
Typography.displayName = 'Typography';
export default Typography;
