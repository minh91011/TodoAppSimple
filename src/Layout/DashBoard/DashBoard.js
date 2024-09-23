import React from "react";
import {
    MailOutlined,
    PhoneOutlined,
    ArrowLeftOutlined
} from '@ant-design/icons';
import './DashBoard.scss';


const DashBoard = () => {
    return (
        <>
            <div>
                <div className="row">
                    <div className="col-md-4" style={{ textAlign: 'left' }}>
                        <h2>Giới thiệu</h2>
                        <p>
                            Xin chào! Tôi là Nhật Minh, một thực tập sinh ReactJS tại VietED. Tôi yêu thích lập trình và luôn tìm cách học hỏi để phát triển kỹ năng của mình.
                        </p>
                        <p>
                            Mình có một vài dự án nho nhỏ đã học được ở đây, mời mọi người theo dõi ở cột bên trái nhé!.
                        </p><br/>
                        <h1><ArrowLeftOutlined /></h1>
                        <br /><br /><br /><br /><br /><br /><br />
                        <h2>Thông Tin Liên Hệ</h2>
                        <p>
                            <MailOutlined /> Email: minhnn011002@gmail.com
                        </p>
                        <p>
                            <PhoneOutlined /> Điện thoại: 0327146217
                        </p>
                        <div>
                            Facebook:
                            <a href="https:facebook.com/minhbeo0110" class="text"> Nguyen Nhat Minh</a>
                        </div>
                    </div>
                    <div className="col-md-8 image">
                        <img className="dashboard-image" src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?cs=srgb&dl=pexels-jjagtenberg-103123.jpg&fm=jpg"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard