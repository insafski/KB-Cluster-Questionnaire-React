import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  &.ant-btn {
    :active,
    :hover,
    :focus {
      color: var(--color-primary);
      border-color: var(--color-primary);
    }

    &-primary,
    &-secondary {
      padding-left: 3rem;
      padding-right: 3rem;
      height: 4rem;
      border-radius: 2rem;
      font-weight: var(--font-weight-body);
      font-size: var(--font-size-body-s);
      line-height: var(--line-height-s);
    }

    &-primary {
      border: 0;
      background-color: var(--color-primary);

      &,
      & span {
        color: var(--color-white);
      }

      &[disabled] {
        &,
        :hover,
        :focus {
          background-color: var(--color-grey-second);
        }
      }

      :active,
      :hover,
      :focus {
        background-color: var(--color-grey);
      }
    }

    &-link {
      color: var(--color-primary);
      border: 0;

      :hover,
      :focus {
        color: var(--color-secondary);
      }
    }
  }
`;

export default Button;
