import { notification } from 'antd'

const displayFormError = function (formRef, error) {
      if ('response' in error && error.code !== 'ERR_BAD_RESPONSE') {
            const { data: errors } = error.response

            if ('non_field_errors' in errors) {
                  notification['error']({
                        message: errors.non_field_errors[0],
                        placement: 'topRight',
                  })
            } else {
                  const fieldsErrors = []

                  Object.entries(errors).forEach((entry) => {
                        const [key, value] = entry
                        fieldsErrors.push({
                              name: key,
                              errors: value,
                        })
                  })

                  formRef.setFields(fieldsErrors)
            }
      } else {
            notification['error']({
                  message: 'Operation unsuccessful',
                  description: error.message,
                  placement: 'topRight',
            })
      }
}

export default displayFormError
