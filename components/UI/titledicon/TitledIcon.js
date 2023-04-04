import React from 'react';
import {Typography} from "antd";
import styles from "./Titledicon.module.scss";

const {Paragraph} = Typography

const TitledIcon = ({icon, text}) => {
  return (
    <div className={styles.titledIcon}>
      <Typography className={'flex items-center'}>
        {icon}
      </Typography>
        <Paragraph ellipsis={{rows:1}} className={'!my-0 !text-base'}>{text}</Paragraph >
    </div>
  );
}

export default TitledIcon;
