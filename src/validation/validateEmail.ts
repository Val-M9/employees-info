import Joi from 'joi';
import { errors } from './errors';

export const validateEmail = (email: string, helper: Joi.CustomHelpers) => {
  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.match(emailRegExp)) {
    return helper.message({ custom: `${errors.WRONG_EMAIL}` });
  }

  return email;
};
