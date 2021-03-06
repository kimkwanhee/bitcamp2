// 서비스 컴포넌트 - 게시물 관련 업무를 처리할 객체
package challenge.service;

import java.util.List;

import challenge.domain.CommuMedia;
import challenge.domain.Community;

public interface CommuMediaService {
    // 서비스 컴포넌트에서 메서드명을 지을 때는 
    // 업무 용어를 사용하라!
    List<CommuMedia> list();
    CommuMedia get(int no);
    int add(CommuMedia commuMedia);
    int update(CommuMedia commuMedia);
    int delete(int no);
    List<CommuMedia> ListNo(int commuNo);
}