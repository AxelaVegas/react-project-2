


export const CheckAge = ({age}) => {

    if (age > 17) {
        return  <div>
                    <p>WELCOME to adult chat!</p>
                </div>
    } else return   <div>
                        <p>WELCOME to the children's chat!</p>
                    </div>

}