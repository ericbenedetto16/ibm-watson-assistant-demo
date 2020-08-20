const getSession = async () => {
  try {
    // sessionStorage.clear();
    let session_id;
    if (!sessionStorage.getItem('session_id')) {
      let res = await fetch(`${process.env.API_URL}/session`);
      res = await res.json();

      if (res.success === true) {
        sessionStorage.setItem('session_id', res.session_id);
        session_id = res.session_id;
      } else {
        console.warn('Session Could Not be Initialized');
      }
    } else {
      session_id = sessionStorage.getItem('session_id');
    }
    return session_id;
  } catch (err) {
    alert('Error Getting Session!');
  }
};

export const sendMessage = async (payload) => {
  try {
    const session_id = await getSession();
    const headers = new Headers();
    const body = JSON.stringify(payload);
    headers.set('Content-Type', 'application/json');
    headers.set('sessionid', session_id);
    let res = await fetch(`${process.env.API_URL}/message`, {
      headers,
      method: 'POST',
      body,
    });

    res = await res.json();

    if (res.success === true) {
      // TODO: Parse through Different Response Types and Handle/Render
      if (res.msg.result.output.generic.length <= 0)
        return [
          {
            response_type: 'text',
            text: 'Sorry I did not understand what you meant.',
          },
        ];

      return res.msg.result.output.generic;
    }
  } catch (err) {
    console.warn(err);
    alert('Error Sending Message!');
  }
};
