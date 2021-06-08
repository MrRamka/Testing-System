def calc_question_difficulty(user_answers) -> float:
    all_user_answers_amount = len(user_answers)
    correct_user_answers_amount = len(list(filter(lambda ans: ans.answer.is_correct, user_answers)))

    return correct_user_answers_amount / all_user_answers_amount if all_user_answers_amount != 0 else 0

