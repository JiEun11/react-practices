import React, { Fragment } from 'react'
import { Button, Radio, Row, Col, Form, Table } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import MoreInfo from './MoreInfo';

export const InnerCon = () => {
    return (
        <Fragment>
            <Row>
                <Col span={20}>
            <p>2021년 1차 운영평가</p>
                </Col>
                <Col span={4}>
                <Button  size='default'> 접기</Button>
                {/* <Button  size='default'> 펼치기</Button> */}
                </Col>
            </Row>
            <Form>
                
                <Row>
                    <Col span={20}>
                        <Button  size='default'> 승인</Button>
                        <Button  size='default'> 반려</Button>
                        <Button  size='default'> 삭제</Button>
                    </Col>
                    <Col span={4}>
                        <Button  size='default'> 자료 업로드</Button>
                    </Col>
                </Row>
                <MoreInfo />
            </Form>
        </Fragment>
)
}
