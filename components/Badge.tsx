import styled from '@emotion/styled';

const Badge = styled.div(
  ({ hidden }) => `
  border-radius: 50%;
  box-sizing: border-box;
  background: #0f2e7c;
  color: white;
  position: absolute;
  text-align: center;
  padding: 0.7em;
  padding-top: 1.55em;
  right: 6em;
  top: -1em;
  width: 8em;
  height: 8em;
  transform: rotate(12deg);
  display: ${hidden ? 'hidden' : 'block'}
`
);

export default Badge;
