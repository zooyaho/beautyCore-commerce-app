import React from 'react';

import EditUserInfoPageView from './EditUserInfoPage.view';
import useFormValidate from './_hooks/useFormValidate';

// interface EditUserInfoPageProps extends ChakraProps { }

const EditUserInfoPage = () => {
  const formData = useFormValidate();
  const { handleSubmit } = formData;
  console.log('formData: ', formData);

  const onSubmit = handleSubmit(
    ({ username, nickname, email, phone, gender, age }) => {
      console.log(
        `submitted: ${username}, ${nickname}, ${email}, ${phone}, ${gender.value}, ${age}`,
      );
    },
  );
  return <EditUserInfoPageView formData={formData} onSubmit={onSubmit} />;
};

export default EditUserInfoPage;