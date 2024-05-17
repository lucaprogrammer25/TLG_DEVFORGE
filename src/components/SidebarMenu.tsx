import React from 'react';

const SidebarMenu = () => {
    return (
        <div className="sidebarMenuDropdown">
            <div className="dropDownMan">
                <h3>Man</h3>
                <div className="dropDown">
                    <p>t-shirts</p>
                    <p>trousers</p>
                    <p>suit</p>
                    <p>shoes</p>
                </div>
            </div>
            <div className="dropDownWoman">
                <h3>Woman</h3>
                <div className="dropDown">
                    <p>t-shirts</p>
                    <p>trousers</p>
                    <p>dresses</p>
                    <p>shoes</p>
                </div>
            </div>
            <div className="dropDownAccessories">
                <h3>Accessories</h3>
            </div>
        </div>
    )
}

export default SidebarMenu;