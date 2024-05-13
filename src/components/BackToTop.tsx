

interface BackToTopButtonProps {
  onClick: () => void;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ onClick }) => (
  <div className="back-to-top" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
      <path id="Shape_2_copy_2" data-name="Shape 2 copy 2" fill="#6c757d" d="M8.537 4.13699L4.437 0.365994L0.337 4.13499"></path>
    </svg>
  </div>
);


export default BackToTopButton;