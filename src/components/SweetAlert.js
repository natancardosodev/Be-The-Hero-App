import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SweetAlert = withReactContent(Swal).mixin({
    customClass: {
        confirmButton: 'button',
        cancelButton: 'button'
    },
    buttonsStyling: false
});

export default SweetAlert;