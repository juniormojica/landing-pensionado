const Map = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8!2d-73.26415768060156!3d10.4523593110531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzA4LjUiTiA3M8KwMTUnNTEuMCJX!5e0!3m2!1ses!2sco!4v1737390562768!5m2!1ses!2sco"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;