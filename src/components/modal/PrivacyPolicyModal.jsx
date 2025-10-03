import React from 'react'

function PrivacyPolicyModal({showPrivacyPolicy, setShowPrivacyPolicy}) {

    if(showPrivacyPolicy === false) {
        return
    }
  return (
     <div className={showPrivacyPolicy ? 'modal fade show' : "modal fade " }>
        <div class="modal-dialog modal-big">
            <div class="modal-content">                
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Privacy Policy</h1>
                    <button onClick={() => setShowPrivacyPolicy(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="pd10 terms-service-edit">
                       <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis molestie blandit. Donec euismod felis non leo fermentum, id faucibus nunc tincidunt. Quisque a urna tortor. Morbi a lectus egestas, pretium nulla ultricies, varius turpis. Aliquam pellentesque, lectus vel pulvinar laoreet, felis dui dictum lacus, eu consectetur risus magna vitae nibh. Quisque nec purus accumsan, blandit neque nec, finibus lectus. Praesent semper, metus et consequat tincidunt, nulla libero porta nulla, ut posuere leo lacus id augue. Ut lectus turpis, iaculis sed lacus vel, tempor facilisis ligula. Donec molestie tempor enim a dictum. Morbi convallis pulvinar velit, aliquet suscipit risus faucibus tincidunt. Aliquam vel arcu vitae dui dictum tincidunt. Nullam sit amet dui nulla. Proin pellentesque lorem quis lacus fermentum condimentum. Aenean vitae ante vehicula nunc efficitur hendrerit. Phasellus aliquam venenatis elit, vel consectetur sem gravida eu.
                       </p>
                       <p>
                        Maecenas consectetur orci vitae eleifend vulputate. Pellentesque iaculis aliquet dignissim. Nam laoreet enim eget nunc auctor ullamcorper. Quisque vestibulum ultrices massa vel varius. Sed a cursus arcu. Etiam bibendum tortor non quam tempor vestibulum. Nam tempor tempus blandit. Etiam nec lacus eu felis feugiat convallis. Etiam commodo sit amet turpis blandit tempus. Nulla condimentum id mauris nec porta. Nulla libero felis, eleifend fringilla egestas vel, vehicula in libero. Integer blandit elementum velit eget rhoncus.
                       </p>
                       <p>
                        Vivamus finibus dolor at dui faucibus faucibus. Sed et finibus ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Sed congue in lacus non cursus. Vivamus ac finibus ligula, posuere molestie ante. Suspendisse pharetra non purus et venenatis. Aenean eu lorem id sapien sollicitudin porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer laoreet tempor commodo. Fusce nisi mauris, elementum quis enim nec, rutrum dictum sem. Cras eros nisi, scelerisque sit amet lacinia in, facilisis non mauris. Morbi lobortis nulla at massa elementum, pellentesque placerat lacus egestas.
                       </p>
                       <p>
                        Cras nec aliquet lectus, sit amet faucibus elit. Mauris at tempor est. Curabitur ligula arcu, ultricies nec tortor luctus, consectetur finibus neque. Sed nunc elit, hendrerit in consequat eu, vestibulum vel orci. Proin vitae vulputate nibh, a volutpat diam. Sed auctor dolor at magna pretium porttitor. Cras est nunc, rhoncus in tempus eu, mollis at libero. Vestibulum luctus at enim quis gravida. Phasellus varius sapien ut felis pellentesque gravida quis eget eros. Etiam augue ligula, ullamcorper vel justo non, rhoncus tincidunt leo. Etiam vel volutpat augue. Mauris tortor turpis, ullamcorper eu metus eu, pellentesque ullamcorper orci. Mauris maximus sed mi nec commodo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam mollis eget justo vitae aliquam.
                       </p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"  onClick={() => setShowPrivacyPolicy(false)}>Close</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default PrivacyPolicyModal