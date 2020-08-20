exports.lookupRecords = async (req, res, next) => {
  try {
    // TODO: Structure Watson Response According to Docs
    const student_taken_courses = new Set(
      req.student.completed_courses.map(({ name }) => name)
    );
    const available_courses = req.courses.filter(
      ({ name }) => !student_taken_courses.has(name)
    );

    const res_text = `Here are the recommended courses for ${
      req.student.name
    }:\n${available_courses.map(({ name }) => name).join(', ')}`;

    res.status(200).json({ success: true, available_courses, res_text });
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ success: false, msg: 'Internal Server Error!' });
  }
};
