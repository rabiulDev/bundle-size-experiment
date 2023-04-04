import React from 'react'
import { Progress, Typography } from 'antd'

const ProgressBar = ({ icon, text, percentage }) => {
      return (
          <div>
              <Typography className={'!text-base'}>
                  {icon}
                  <span className={'!ml-1'}>{text}</span>
              </Typography>
              <Progress strokeLinecap='butt' percent={percentage} showInfo={false} />
          </div>
      )
}

export default ProgressBar
