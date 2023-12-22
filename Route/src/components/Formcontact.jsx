const Formcontact = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="text">Ingresa tu comentario</label>
        <input type="text" id="text" name="text" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formcontact;
