const template = (user, link) => `
<table style="width: 100%; align-items: center; margin: 40px 0;">
    <tbody>
        <tr class="header" style="height: 80px; display: flex;">
            <td
                style="
                    width: 100%;
                    max-width: 470px;
                    margin: 0 auto;
                "
            >
                <picture 
                    style="
                        display: flex; 
                        margin-bottom: 10px; 
                        width: 100%;
                        padding: 10px;
                        margin: 0;
                        " 
                >
                    <img src="https://avatars.githubusercontent.com/u/47469351?v=4" alt="My Store" 
                        style="width: 60px;"
                    >
                </picture>
            </td>
        </tr>
        <tr class="infoUser" style="height: 110px; display: flex; margin-bottom: 25px;">
            <td
                style="
                    width: 100%;
                    max-width: 470px;
                    border-top: 2px solid #EEC481; 
                    margin: 0 auto;
                    padding: 25px;
                    box-sizing: border-box;
                "
            >
                <p style="margin: 0; color: rgba(54, 59, 68, 1); text-decoration:none; margin-bottom: 20px;">Hello Dear,</p>
                <p style="margin: 0; color: rgba(54, 59, 68, 1); text-decoration:none; margin-bottom: 5px;">We received a request to reset your password</p>
                <p style="margin: 0; color: rgba(54, 59, 68, 1); text-decoration:none;">If this is correct, please click the button below..!</p>
            </td>
        </tr>
        <tr class="link" style="height: 80px; display: flex;">
            <td
                style="
                    width: 100%;
                    max-width: 470px;
                    margin: 0 auto;
                "
            >
                <a href="${link}"
                    style="
                        margin: 0 auto;
                        border: none;
                        border-radius: 3px;
                        padding: 10px;
                        width: 90%;
                        display: block;
                        font-weight: bold;
                        color: #EFE6EA;
                        background: #1B998B;
                        font-size: 16px;
                        text-align: center;
                        cursor: pointer;
                        text-decoration: none;
                    "
                >
                    Change Password
                </a>
            </td>
        </tr>
        <tr style="height: 80px; display: flex; width: 100%;">
            <td
                style="
                    width: 100%;
                    max-width: 470px;
                    margin: 0 auto;
                    border-top: 3px solid #D36D4A;
                    background: rgba(54, 59, 68, 0.6);
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                "
            >
                <table style="width: 100%; height: 100%;">
                    <tbody>
                        <tr style="
                            width: 100%;
                            display: flex;
                            padding-top: 10px;
                            margin-bottom: 5px;
                        ">
                            <td style="
                                margin: 0 auto;
                            ">
                                <span
                                    style="
                                        display: flex;
                                        color: #EFE6EA;
                                        width: 100%;
                                        font-size: 12px;
                                        font-weight: bold;
                                        margin: 0 auto;
                                    "
                                >
                                    This message was sent to: 
                                        <span style="color:#EEC481; margin: 0 7px">${user.email}</span> by user request.
                                </span>
                            </td>
                        </tr>
                        <tr style="
                            width: 100%;
                            display: flex;
                            height: 25px;
                        ">
                            <td style="margin: 0 auto; height: 25px; position: relative; display: flex;">
                                <span
                                    style="
                                        color: #EFE6EA;
                                        font-size: 12px;
                                        display: block;
                                        line-height: 25px;
                                    "
                                >
                                    My Store 2022, this is a product of Kodeprint
                                </span>
                                <img src="https://avatars.githubusercontent.com/u/47469351?v=4" alt="KodePrint Logo"
                                    style="
                                        width: 25px;
                                        margin-left: 5px;
                                    "
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </span>
            </td>
        </tr>
    </tbody>
</table>
`

module.exports = {template}