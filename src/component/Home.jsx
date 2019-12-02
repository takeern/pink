import React, { PureComponent } from 'react';

//less
import '../static/css/home.less';

export default class Home extends PureComponent {

    render() {
        return (
            <React.Fragment>
                <div className='home'>
                   <div style={{ display: 'flex' }}>
                       <div>
                           <img src='../src/static/img/hand.png' style={{ width: 200 }}/>
                       </div>
                       <div style={{ fontSize: 17, padding: '0px 20px' }}>
                            <span style={{ fontWeight: 900 }}>International Journal of Management Science Research (IJMSR, ISSN: 2536-605X)</span>
                            is a scholarly peer-reviewed international scientific journal published quarterly for researchers, developers, technical managers, and educators in the education and management field. It provide a high profile, leading edge forum for academic researchers, industrial professionals, engineers, consultants, managers, educators and policy makers working in the field to contribute and disseminate innovative new work on all the areas of education and management. 
                            IJMSR invites original, previously unpublished, research, survey and tutorial papers, plus case studies and short research notes, on both applied and theoretical aspects of education and management.
                       </div>
                   </div>
                   <div style={{ marginLeft: 10 }}>
                       <h3>Editor-in-Chief</h3>
                            • <b>Prof. Dr. I. P. Gmpel:</b>Fachochschule Konstanz, Germany<br/><br/>
                            <b>Email: <a href="mailto:editorial@ijomsr.org">editorial@ijomsr.org</a></b>
                            <h3>Area of Interests</h3>
                            • Education Science<br/>
                            • Macroeconomics<br/>
                            • Microeconomics<br/>
                            • Industrial Economics<br/>
                            • Statistics<br/>
                            • Econometrics<br/>
                            • Human Resources<br/>
                            • Business Management<br/>
                            • Business Administration<br/>
                            • Social Work<br/>
                            • Administrative Management<br/>
                            • Art<br/>
                            • Law<br/>
                            • Social Sciences<br/>
                            • Ethics<br/>
                            • Physical Education<br/>
                            <h3>Subscription Information</h3>
                            The International Journal of Management Science Research (IJMSR, ISSN: 2536-605X) is published one volume with 6 issues a year. Subscriptions may be entered at any time for a volume at the following rates.
                            <br /><br />

                            <table>
                                <tbody>
                                    <tr>
                                        <td>• Article Processing Fees:</td>
                                        <td><b>EUR 200</b></td>
                                    </tr>
                                    <tr>
                                        <td>• Price for Single Copy:</td>
                                        <td><b>EUR 20</b></td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                </div>
            </React.Fragment>
        );
    }
}