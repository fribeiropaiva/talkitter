import React from "react";

const TextBox = () => {
	return (
		<div className="text-box">
			<textarea
				className="textarea-style"
				cols="55"
				rows="1"
				resize="none"
				maxlength="180"
				placeholder="What's happening?"
			/>
		</div>
	);
};

export default TextBox;
