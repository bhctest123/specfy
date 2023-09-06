import * as Form from '@radix-ui/react-form';
import type { FieldsErrors } from '@specfy/core';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';

import { authLocal } from '../../api/auth';
import { handleErrors, isError } from '../../api/helpers';
import { API_HOSTNAME, IS_PROD } from '../../common/envs';
import { titleSuffix } from '../../common/string';
import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';
import { Button } from '../../components/Form/Button';
import { Field } from '../../components/Form/Field';
import { Input } from '../../components/Form/Input';
import { Logo } from '../../components/Logo';
import { useToast } from '../../hooks/useToast';

import cls from './index.module.scss';

export const Login: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FieldsErrors>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await authLocal({ email, password });

    if (isError(res)) {
      return handleErrors(res, toast, setErrors);
    }

    setErrors({});
    navigate(`/`);
  };

  const handleGitHub = () => {
    window.location.replace(`${API_HOSTNAME}/0/auth/github`);
  };

  return (
    <div className={cls.container}>
      <Helmet title={`Login ${titleSuffix}`} />
      <div>
        <Link className={cls.logo} to="/">
          <Logo />
        </Link>
        <div className={cls.oauth}>
          <Button onClick={handleGitHub} size="l" block>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="github"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
            </svg>
            Sign in with GitHub
          </Button>
        </div>
        {!IS_PROD && (
          <Card padded>
            <Form.Root onSubmit={onFinish}>
              <Flex gap="l" column>
                <Field label="Email" name="email" error={errors.email?.message}>
                  <Input
                    type="email"
                    placeholder="you@email.com"
                    size="l"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Field>
                <Field
                  label="Password"
                  name="password"
                  error={errors.password?.message}
                >
                  <Input
                    type="password"
                    size="l"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Field>
                <Button display="primary" size="l" block type="submit">
                  Sign in
                </Button>
              </Flex>
            </Form.Root>
          </Card>
        )}
      </div>
    </div>
  );
};
