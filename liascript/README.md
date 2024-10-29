<!--
version:  3.0.0

author:   Dr. Manuela Ulrich, Sarah Roos, Michael Kowalczyk, Dr. Manuela Ulrich, Sarah Roos, Michael Kowalczyk, Dr. Manuela Ulrich, Sarah Roos, Michael Kowalczyk

email:    teacheredu.euniwell@uni-konstanz.de

comment:  Self-study Module about Diversity & Inclusion in Education
          
logo:     https://euniwell.de.cool/wp-content/uploads/liascript/images/euniwell-oer-cc-header.svg 

icon:     https://euniwell.de.cool/wp-content/uploads/liascript/images/euniwell-oer-cc-header.svg

language: en

narrator: English Female

mode:     Textbook
dark:     false

date:     08/10/2024

attribute: The OER Self-study Module "Diversity & Inclusion in Education" of the European University for Well-Beeing is licenced under [CC-BY-SA 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/) license.

  ![cc by sa](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/CC_BY-SA_icon.svg/320px-CC_BY-SA_icon.svg.png)

translateWithGoogle: true

script: https://euniwell.de.cool/wp-content/plugins/h5p/h5p-php-library/js/h5p-resizer.js

@onload
const showFootnote = window.LIA.showFootnote

window.LIA.showFootnote = (ref) => {
  if (window.LIA.settings.mode === "Textbook") {
    document.getElementById("footnote-" + ref).scrollIntoView()
  } else {
    showFootnote(ref)
  }
}
@end

@h5p_embed: @h5p_embed_(@uid,@0,@1)

@h5p_embed_
<iframe id="h5p_@0" style="width:100%; aspect-ratio: @1" srcdoc='<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{display:flex;justify-content:center;align-items:center;height:100vh;margin:0;background-color:#f0f0f0}.loader{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:80px;height:80px;animation:spin 2s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style></head><body><div class="loader"></div></body></html>'></iframe>
<script run-once>
fetch('@2')
    .then(response => {
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok ' + response.statusText);
        }
        return response.text(); // Abruf als Text
    })
    .then(htmlText => {
        document.getElementById('h5p_@0').srcdoc = htmlText;
        send.lia("LIA: stop");
    })
    .catch(error => {
        console.error('Es gab ein Problem mit dem Abruf: ', error);
        send.error("LIA: stop");
    });

"LIA: wait"
</script>
@end

-->

# EUniWell Andre Foo bar Lernumbgebung sasfd asfdsf dasdfasfdfa asfdafsdafd

* 5\.1 Lange Ladezeit \.\..asdfasdf
* 5\.2 Sehr lange Ladezeit ...


## Quiz

[[\[hallo\]]]

[[\[hallo]]

H5P Code oben eingefügt

Bilder ergäzt: 1 hosted version und darunter embedded (zum Test, ob sie angezeigt werden)

## 1 Lange Ladezeit

Types of Cooperation
------

Based on Lütje-Klose et al.(2024)[^1] a distinction can be made between:

1.	__Multiprofessional cooperation__ (i.e. between different professional groups, e.g. involving teachers, special needs teachers and school social workers in multi-perspective and case-related counselling, diagnostics and support planning),

2.	__Intraprofessional cooperation__ (i.e. within a professional group, e.g. between subject teachers) and

3.	__Interprofessional cooperation__ (i.e. between two professional groups, e.g. classroom teachers and special needs teachers, who work together in a class in relation to teaching).

All types of cooperation require a partnership relationship in which __goals, knowledge, resources, tasks and responsibilities__ are consciously shared. Such a relationship requires the development of trust and respect. Furthermore, team development requires time and commitment (Friend & Cook, 2010)[^2].



Multi-professional teams
-----

Looking on international research, it is undisputed that multiprofessional teams and successful cooperation between the different educational actors are particularly crucial for inclusive education and the individual support of a diverse student body (Köpfer et al., 2021)[^3]. 

The following illustration includes main features and conditions of successful multiprofessional teams.:

<center>![](https://euniwell.de.cool/wp-content/uploads/liascript/images/multiprof-teams-crop.png "Own illustration based on Widmer-Wolf (2018)[^4]")</center>

![](2729d51f4b981013bd516736352e5d964fcb54c5.png)


Establishing different kinds of cooperation, general schools can adopt changes in overall structure that inclusion becomes a part of the school’s culture. The role of school leaders is crucial; they are kind of managers in the schools but also responsible for social networking. 

Intraprofessional cooperation could be seen as a lower challenge because the actors have the same professional background, they have an idea of each other’s expertise and could change perspectives easier. Interprofessional cooperation is a main structure for inclusive lessons in general schools.


A model teachers` perspectives on co-teaching
----

Let’s have a look at what teachers need to be successful in inclusive classrooms. The following illustration is a model of teachers’ perspectives on the conditions for successful co-teaching by Jurkowski, S., Ulrich, M., & Müller, B. (2023)[^5]. The categories describe the conditions for successful co-teaching in inclusive classes on the levels of the educational system, the single school, and the teaching dyad.

<details>

<summary> __Level 1 - Educational System__ (click to view)</summary>

* We identiﬁed two categories that refer to the educational systems of the federal states in Germany: "teacher education" and "inclusive school system". The category "teacher education" included aspects of professionalisation in the ﬁeld of inclusive education (i.e. study curricula, pre-service and in-service teacher training). The special education teachers interviewed stated their lack of didactical knowledge that they would need for teaching large groups. In contrast, the general teachers reported the need for knowledge about their students’ special needs to provide suﬃcient assistance to those students when the special education teacher is not in the class. The category "Inclusive school system" reﬂected the teachers’ ideas about the implementation of inclusion and the educational opportunities for children with special needs. It became clear that the teachers have the wish for the development of a full-inclusive school system. However, some  were not convinced that the high-achiever would benefit.

</details>

<br>

<details>

<summary> __Level 2 - Single School__ (click to view)</summary>

* The three main categories on this level concern structural and organisational conditions as well as attitudes towards co-teaching and co-teachers’ collaboration in inclusive classes: "organisation of inclusive teaching" (time for teaching dyads, equipment, and teaching concepts), "multi-professional cooperation" (cooperation within a school, with external professionals, and with parents and families), and "principals’ administration" (principals’ responsibility to provide co-teachers with guidelines as well as their attitudes towards inclusive schooling).

</details>

<br>

<details>

<summary> __Level 3 - Teaching dyad/co-teachers__ (click to view)</summary>

* The level of the co-teacher contains six categories regarding to a social-emotional as well as role-related aspects: "relationship" (e.g., sympathy), "task assignment" (e.g., professional role-taking), "forms of collaboration" (e.g., shared reflecion on a lesson and constructive planning), individual "beneﬁts from co-teaching" (Entlastung, berufliches Lernen); "self-organisation" (Zeitfenster für Absprachen), and "inclusive learning arrangements" (je nach Klasse anpassen).

</details>

<br>

<center>![](https://euniwell.de.cool/wp-content/uploads/liascript/images/3-levels-crop.png "Own illustration based on 3 Levels of co-teaching in Jurkowski, S., Ulrich, M., & Müller, B. (2023)[^5]")</center>

![](fbad432870309da9c267f79358c78d8cac5b704b.png)


Overall, this chapter 5 has shown which adjustments the school system - whether at the political-educational system level, the school management level or the teaching level - is and must be capable of acting on in order to organise inclusive education. In view of the legal situation, it should not be a question of whether inclusion is possible in the school context; instead, all educational stakeholders must act cooperatively in their various roles, set out on a journey and pursue common goals. Ultimately, development takes time and positive experiences!

In the next chapter
---

In the following chapter, we will move away from the professional level of action and look at the diversity characteristics of the pupils that teachers may be confronted with in their classes.


---
[^1]: Lütje-Klose, Birgit, Wild, E., Grüter, S., Gorges, J., Neumann, P., Papenberg, A., & Goldan, J. (2024). Kooperation in inklusiven Schulen. Pädagogik (Weinheim). https://doi.org/10.14361/9783839460689

[^2]: Friend, M., Cook, L., Hurley-Chamberlain, D., & Shamberger, C. (2010). Co-teaching: An illustration of the complexity of collaboration in special education. Journal of Educational and Psychological Consultation: The Official Journal of the Association for Educational and Psychological Consultants, 20(1), 9–27. https://doi.org/10.1080/10474410903535380

[^3]: Köpfer, A., Powell, J. J. W., & Zahnd, R. (2021). Handbuch Inklusion international / International Handbook of Inclusive Education (A. Köpfer, J. J. W. Powell, & R. Zahnd, Eds.). Verlag Barbara Budrich. https://library.oapen.org/handle/20.500.12657/46311 

[^4]: Widmer-Wolf P. (2018). Kooperation in multiprofessionellen Teams an inklusiven Schulen. in T.Sturm & M.Wagner-Willi (Hrsg.), Handbuch schulische Inklusion (Kap 3.5). UTB. - https://doi.org/10.36198/9783838549590

[^5]: Jurkowski, S., Ulrich, M., & Müller, B. (2023). Co-teaching as a resource for inclusive classes: teachers’ perspectives on conditions for successful collaboration. International Journal of Inclusive Education, 27(1), 54–71. https://doi.org/10.1080/13603116.2020.1821449

## 2 Sehr lange Ladezeit

<iframe style="width: 100%; aspect-ratio: 16 / 9; margin-top: 10px " src="https://www.youtube.com/embed/videoseries?si=_pLFHznqfxMOQz3O&amp;list=PLCDsTyftAA2D_buI_Rti5phLZ1DdFsAMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<center>![](https://euniwell.de.cool/wp-content/uploads/liascript/images/crucial-factors-co-teaching.png "Crucial factors for Co-teaching, own illustration")</center>


<details>

<summary> __How do we introduce ourselves to pupils and parents as two class teachers?__</summary>

* From the first day of school letter, information evening, etc.

* Names of both teachers on the classroom door and on documents

</details>

---

<details>

<summary>__How do we have equal access to resources such as desks, cupboards, teaching materials, technical infrastructure and equipment, workbooks, the blackboard?__</summary>

* Discussions about room/material design and allocation may seem minor at first, but they are crucial to ensure that both teachers have equal access. There are teachers who are very reluctant to share their materials - open communication is therefore important.

* It is helpful to work with the school management to ensure that there are enough materials and furniture in the classroom for both teachers.

</details>

---

<details>

<summary> __How will we share responsibility for writing individual support plans, letters/emails home, communications in the form of phone calls and meetings with parents, development of project and lesson plans, assessment of tests and project tasks, materials and seating plans?__</summary>

* It is important to share communication with families. This includes deliberately not dividing students into "my" and "your" students, but seeing all students and their families as "ours". Co-teachers must therefore agree how and with what frequency they frequency they wish to contact parents, who will inform parents about various events/appointments and how they will share messages from parents.

</details>

---

<details>

<summary> __How do we share information about individual students, changes to lesson plans and teaching materials that need to be developed together?__</summary>

* It is important that co-teachers choose an effective communication system to share information, discuss upcoming deadlines, and plan lessons.  

* While some co-teachers meet immediately after class, other co-teachers prefer to email or call each other later. It is also helpful if co-teachers agree on a place where they both have access to messages from parents and collected materials. 

</details>

---

<details>

<summary> __How do we share responsibility for the assessment of tests, project performance, progress in development plans, student behavior?__</summary>

* Co-teachers need to agree what type of assessment of student performance they will use and at what time frame and interval. It is essential that both teachers have an equal say in the assessment of student work, project contributions and tests.

</details>

<details>

<summary> __How do we share responsibility for class rules and rituals regarding our class, small groups and individual students?__</summary>

* Co-teachers need to agree on class rules and rituals in advance, for example, rituals at the beginning and end of the day, when students want to use the bathroom or change classrooms; their tolerance limits when dealing with noise or rule violations; and agreements on deadlines regarding the communication and submission of homework.

</details>

On the one hand, it is crucial that co-teachers take enough time to discuss and answer these questions and, on the other hand, that any disagreements that do arise are not resolved in front of the students, but in private.

Only when co-teachers have taken the time to lay the foundations for co-teaching does it make sense for them to face up to the actual planning and implementation of joint lessons.



[^1]: Friend, M., Cook, L., Hurley-Chamberlain, D., & Shamberger, C. (2010). Co-teaching: An illustration of the complexity of collaboration in special education. Journal of Educational and Psychological Consultation: The Official Journal of the Association for Educational and Psychological Consultants, 20(1), 9–27. https://doi.org/10.1080/10474410903535380

[^2]: Studienseminar Hannover für das Lehramt für Sonderpädagogik: Handreichungen zur Ausbildung im gemeinsamen Unterricht - https://lehrerfortbildung-bw.de/s_sueb/alle/fb1/6_mat/3_zusammen/11_lit/Handreichungen-zur-Ausbildung-im-gemeinsamen-Unterrich.pdf Own translation - Source: Forms of Cooperation (according to Birgit Lütje-Klose) - Lütje-Klose, B., & Willenbring, M. (1999). Kooperation fällt nicht vom Himmel - Möglichkeiten der Unterstützung kooperativer Prozesse in Teams von Regelschullehrerin und Sonderpädagogin aus systemischer Sicht. 38. https://www.fachportal-paedagogik.de/literatur/vollanzeige.html?FId=2432171 



## 22 Sehr lange Ladezeit

The most important aspects of establishing a co-teaching relationship are outlined below. 

The differentiation of six established forms takes place under the point of the distribution of roles and responsibilities. 

Finally, we look at a video in which teachers share their experiences.

1. Getting to know each other (similarities and differences)
---

An important first step in the development of co-teaching is for the co-teaching partners to get to know each other. Spending hours together every day and sharing all aspects of teaching can be fun, but it can also lead to frustration and conflict. 

* The first step is to discuss goals, interests, teaching and working styles and preferences for giving and receiving feedback.

2. Sharing roles and responsibilities
----

The aim is to plan, implement and evaluate the lesson together and to share responsibilities. Different strengths of the co-teachers can come into play in the planning and design of lessons, but both should play an equal part in all aspects of the lesson. In well-functioning co-teaching classes, it is often impossible to tell at first glance who is a special needs teacher and who is a mainstream teacher because both are equally committed and have an equal say.

_Six forms of Co-Teaching_
----

In practice dividing up roles and responsibilities between two teachers can be achieved in either one of the following six forms or a mixture of them.

| Form                                                                       | Description                                                                                                                                                                                                                  | Purpose                                                                                                                                                        |
|:-------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Teacher & observer__ ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/teacher-observer.png) -   | One teacher leads a large-group instruction while the other gathers academic, behavioral, or social data on specific students or the class group.                                                                         | For detailed recording of the learning process, i.e. learning behavior/progress of individual pupils.                                                           |
| __Teacher & assistant__ ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/teacher-assistant.png)  | One teacher leads instruction while the other circulates among the students offering individual assistance.                                                                                                                  | If a teacher has special expertise for the teaching unit and for teaching units that require particular progress and intensive monitoring of the learning process. |
| __Team-teaching__ ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/team-teaching.png)        | Both teachers lead large-group instruction by both lecturing, representing opposing views in a debate, illustrating two ways to solve a problem, and so on.                                                                 | With team teaching, students experience open and differentiated lessons in which teachers and students work together.                                            |

| Form                                                                       | Description                                                                                                                                                                                                                  | Purpose                                                                                                                                                        |
|:-------------------------------------------------------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __Parallel teaching__ ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/parallel-teaching.png)    | Two teachers, each with half the classgroup, present the same material for the primary purpose of fostering instructional differentiation and increasing student participation.                                             | To be able to better support pupils in the learning process by reducing the pupil-teacher ratio and to promote the participation of pupils.                        |
| __Station teaching__  ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/station-teaching.png)    | Instruction is divided into three nonsequential parts and students, likewise divided into three groups, rotate from station to station, being taught by the teachers at two stations and working independently at the third. | When learning content is complex but not hierarchical and to provide an overview of topics.                                                                        |
| __Alternative teaching__ ![](https://euniwell.de.cool/wp-content/uploads/liascript/images/alternative-teaching.png) | One teacher works with most students while the other works with a small group for remediation, enrichment, assessment, pre teaching, or another purpose.                                                                     | If the level of achievement in the subject is very different and if some pupils have a parallel curriculum.                                                                                                    |
          |

_Table 1. is based on Friend, M., Cook, L., Hurley-Chamberlain, D., & Shamberger, C. (2010)[^1] and Studienseminar Hannover für das Lehramt für Sonderpädagogik: Handreichungen zur Ausbildung im gemeinsamen Unterricht. Own translation.[^2]_


Video examples
----
<iframe style="width: 100%; aspect-ratio: 16 / 9; margin-top: 10px " src="https://www.youtube.com/embed/videoseries?si=_pLFHznqfxMOQz3O&amp;list=PLCDsTyftAA2D_buI_Rti5phLZ1DdFsAMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>




Regardless of which model of collaboration co-teachers implement, they are required to engage in an intensive examination of how both experts want to share their responsibility for planning, implementing and evaluating lessons. If both experts give each other appropriate freedom of action in these aspects, their competencies are not only used, but also expanded over time and can therefore be used more flexibly

3. Develop a shared classroom in detail
----

Once co-teachers have laid the foundations for good collaboration and agreed on how to share their roles, it is important to think about the detailed issues of their collaboration. 

![](https://euniwell.de.cool/wp-content/uploads/liascript/images/crucial-factors-co-teaching.png "Crucial factors for Co-teaching, own illustration")

This includes understanding how to design and use the shared classroom and how to deal with class rules and consequences. Questions that should be discussed in this context are

__How do we introduce ourselves to pupils and parents as two class teachers?__

* From the first day of school letter, information evening, etc.

* Names of both teachers on the classroom door and on documents 

__How do we have equal access to resources such as desks, cupboards, teaching materials, technical infrastructure and equipment, workbooks, the blackboard?__

* Discussions about room/material design and allocation may seem minor at first, but they are crucial to ensure that both teachers have equal access. There are teachers who are very reluctant to share their materials - open communication is therefore important.

* It is helpful to work with the school management to ensure that there are enough materials and furniture in the classroom for both teachers.

__How will we share responsibility for writing individual support plans, letters/emails home, communications in the form of phone calls and meetings with parents, development of project and lesson plans, assessment of tests and project tasks, materials and seating plans?__

* It is important to share communication with families. This includes deliberately not dividing students into "my" and "your" students, but seeing all students and their families as "ours". Co-teachers must therefore agree how and with what frequency they frequency they wish to contact parents, who will inform parents about various events/appointments and how they will share messages from parents.

__How do we share information about individual students, changes to lesson plans and teaching materials that need to be developed together?__

* It is important that co-teachers choose an effective communication system to share information, discuss upcoming deadlines, and plan lessons. 

* While some co-teachers meet immediately after class, other co-teachers prefer to email or call each other later. It is also helpful if co-teachers agree on a place where they both have access to messages from parents and collected materials.
__How do we share responsibility for the assessment of tests, project performance, progress in development plans, student behavior?__

* Co-teachers need to agree what type of assessment of student performance they will use and at what time frame and interval. It is essential that both teachers have an equal say in the assessment of student work, project contributions and tests. 


__How do we share responsibility for class rules and rituals regarding our class, small groups and individual students?

* Co-teachers need to agree on class rules and rituals in advance, for example, rituals at the beginning and end of the day, when students want to use the bathroom or change classrooms; their tolerance limits when dealing with noise or rule violations; and agreements on deadlines regarding the communication and submission of homework.



On the one hand, it is crucial that co-teachers take enough time to discuss and answer these questions and, on the other hand, that any disagreements that do arise are not resolved in front of the students, but in private.

Only when co-teachers have taken the time to lay the foundations for co-teaching does it make sense for them to face up to the actual planning and implementation of joint lessons.



[^1]: Friend, M., Cook, L., Hurley-Chamberlain, D., & Shamberger, C. (2010). Co-teaching: An illustration of the complexity of collaboration in special education. Journal of Educational and Psychological Consultation: The Official Journal of the Association for Educational and Psychological Consultants, 20(1), 9–27. https://doi.org/10.1080/10474410903535380

[^2]: Studienseminar Hannover für das Lehramt für Sonderpädagogik: Handreichungen zur Ausbildung im gemeinsamen Unterricht - https://lehrerfortbildung-bw.de/s_sueb/alle/fb1/6_mat/3_zusammen/11_lit/Handreichungen-zur-Ausbildung-im-gemeinsamen-Unterrich.pdf Own translation - Source: Forms of Cooperation (according to Birgit Lütje-Klose) - Lütje-Klose, B., & Willenbring, M. (1999). Kooperation fällt nicht vom Himmel - Möglichkeiten der Unterstützung kooperativer Prozesse in Teams von Regelschullehrerin und Sonderpädagogin aus systemischer Sicht. 38. https://www.fachportal-paedagogik.de/literatur/vollanzeige.html?FId=2432171 

 
## 3 Lange Ladezeit

> __Your task:__
> 
> 1. Starting at 4 Min. watch the "Special Education and Regular Eduaction: Working Together" video interview with Christie Eleeson and LeeAnna Rabine. 
> 2. From their point of view, what are the outcomes and benefits for students and teachers?
> 3. Answer the question by using the "drag and drop" interaction below. 

!?[](https://www.youtube.com/watch?v=jlc1ZU-P8jc "Source: https://www.youtube.com/watch?v=jlc1ZU-P8jc&")

Special Education and Regular Education: Working Together
---

<details>

<summary>Click here to show the video transcript</summary>

Co-teaching, at least at Hawthorne and I think elsewhere, is when we have all of our specialists come in
and we keep all of our kids inside the classroom. And we get the opportunity to work as a team within the classroom so that all the kids are staying inside our classroom. So we have LIA teachers that come into our rooms. We also have ELL teachers, and then we also have our SPED teachers that all come into our classroom during their times and work with our students. I find it very beneficial, having all of the specialists come into my classroom. One of the biggest benefits I find, is that we are all on the same page. And so at any point, during our collaboration, they come to our collaborations. They also look at, we write up a sheet every week that we share on the Google Docs and they're able to read through it and look at what we're teaching if they're not able to come to collaboration. But they try to come and then when we come into the room, we're able to work together, to hopefully help these students find success. And what we do and what I love is its, for me decreased a lot of the behaviors. Because those transitions are sometimes the hardest part for students. And when you take away those transitions, you have the opportunity for learning to increase and for the behaviors and the management to decrease. And so it's been really helpful because then we have more eyes onthe whole group.

* __Tanya:__ With pushing,we have anywhere between five to seven students in the classroom and they're all served under a reading or writing disability on an IEP. And I work with the teacher to help make sure their accommodations are in place, to help them out in the classroom and to also kind of troubleshoot, any issues the teacher may run into. And I'm just right there for them to talk to or to email quickly. And then I also work with emailing all of the case managers of those students, to let them know what they did that day, what they maybe missed if they got it done If they didn't. To kind of help those students stay caught upin those regular English classes. In there I don't treat them any differently and I help out all the students that are in there. Because I wanna make sure, that our students are not singled out. Because they already know they have a disability and they don't necessarily like if people know it as well. So that's kinda my goal is to help everybody out when they're, working on something to help all students out. And the teachers see that as well. They tell all the other teachers as well. Mrs. Bjerke is in here to help everybody. You can ask her, you can ask me if you have questions.

* __Aj__: Two teachers working together to meet the needs of students that struggle in math. It takes two adults so they can reach more students. And then were sharing the load of the teaching and great level material. The core math teacher kinda holds the, kinda more of the knowledge of that subject. So she teaches more of it. But as the class goes, I pop in ask questions, kinda think in terms and then go around and helping my students. And we both work together to adapt it or come up with ways to reach our students easier. It helps more students be able to get great level material presented at their level. So then we only have to do as many pull-outs where kinda the research classes. I mean they widen the gap for the learning where this allows them to be in getting great level materials presented at their level. The alternative to this yeah there's is pull out, which I also teach to those classes. The only alternative if we didn't have co-teaching, would be that we would have to pull out and try to modify the the curriculum at their level where this is more presented at theirs. They want their peers they don't feel like they're excluded.

* __Christi__: I have a better understanding of the materials just 'cause I've been doing this for four years. I actually started at Whittier as a co-teacher in the special ed department, and fell in love with the curriculum so I moved to math. And so I think it's good that I have the special ed background and it helps me in the co-taught classroom. But together we plan, we talk about things that we wanna do. We have bright ideas that don't always come to fruition. As a classroom teacher, I have to have knowledge of the special ed students. What their accommodations are and what I need to do. But it's always nice to have that second person in the classroom to come up with different strategies or maybe they suggest trying it a different way. Or when he questions the students, asking them a question in a different way than what I would've thought about asking it. Bouncing ideas off of them using them together, which is something that I don't know if it'll work talking it through with him. Sometimes he thinks I'm crazy, sometimes it works, sometimes it doesn't work. So it's nice to have that second third person 'cause there's a lot of movement in the morning with different math teachers and talking about what we're doing that day and why we're doing it and how we're doing it. And so it's nice to have somebody who knows our students and to bounce ideas off of them.

* __LeeAnna__: Another benefit that I have found, that we've done is flexible grouping. So that flexible grouping allows us to take kids that yes, they might be on an IEP, they might not be on an IEP, but they might need that additional support and we can put them together. And so there's some days that, I might have one of my specialists come in and they might not be working with a specific child that they're supposed to be working with. Based on the fact that, we know how many hours each of our students need for the required amount. And we can work together to fulfill those hours. So it's been pretty cool because then we have that opportunity together to work with the kids. And so if I'm not able to get a kiddo to be able to, if they're struggling with their reading and I'm not able to do something to help motivate them, one of my coworkers might be able to do that.  And one of my specialists and vice versa sometimes we'll look at each other and then say you know, Oh, we're really struggling here. I'm not sure what we need to do next. I can just go right over there and say, let's try this and they can do the same for me. So it's been really helpful for us to be able to build that comradery. And then those kids, don't even know that there's any difference between one from the other. And so they just, it's another day. All the people come in, all the people go out and they know that more than likely they're gonna be working in one of those groups. Mostly for our kiddos who come in, who are on an IEP, they have that label. That label can be very scary to parents. The older they get, the kids realize they have a label. But when, we have the co-teaching occurring, I don't even know if, the majority of my kids who are, are qualifying for SPED even knowing that they are. And that's the powerful piece for me because it's rebuilt relationships, confidence. It's shown them that they are a part of us, they're not any different. And I've been here for 12 years. And so seeing that growth over time and how we've changed and it's been a positive switch for me. It had to require some growth mindset on my part as well knowing that there's gonna be people in here as I'm teaching, I better be organized, I better have myself ready to go. And they might be a little louder than I typically would expect at a certain time. But the loudness is not them being off task, rather It's more on task. So that's been helpful for me too because then I can say, yes I hear them, but at the same time they're on task. They're doing what they need to be doing. They're answering questions, they're recalling whatever we're doing whether it's reading or writing or math. And so that's been really fun for us to see as well.  We have seen an increase in students passing rates in these classes where they struggled before. Because regular education teachers have, almost 100 students probably in a day that they see. And our students are a very small percentage of that. And so by, being able to have a teacher in there, who's monitoring those students, we can catch them and keep them caught up before they fall so far behind, that it's just impossible to get them caught up. It also gives them some confidence and also helps give them some skills. Like for me as the Freshmen English teacher, to kind of get those freshmen on the right path for the rest of high school in order to make sure they start off on a good foot. Some students have to be pulled to be read to. And so, they kind of I will talk to them privately like, Hey, we have a test coming up. After your teacher gives you your test, come with me, just leave the room like to make no big deal of it. They also, kind of know I'm the one to go to if they're stuck with something and they're not really sure. So that piece is nice as well as having that additional person who knows what they're doing and that works in study hall too. Like all of our students have the same study hall times roughly between fourth and fifth period and so, if their teacher has no idea what they did they can send them to us or to me, and then I can help them out. Or the teacher will come ask me what they're doing but, students, they kind of they know that I know but then they don't have to say anything about it either. Like they're struggling so I can kind of help them advocate for their needs too.

* __Aj__: They're with their peers, they're not being pulled out.They're not, again, back in the day where they're always excluded. And so getting the label of learning disability you're excluded from all your peers. While here they just feel like they're with everyone else. Most of the people in here, I would say half the students in here don't even know I'm a special ed teacher. They just think I'm another teacher in the room. That's the other perk is they're learning from the students that math is easier for them. So then the different mindset, the problem solving kinda hearing from them instead of just hearing from the same group of kids that are all just struggling in math. They do learn strategies from their peers. 'Cause the special ed kids bring a different mindset also. So they might not, math might not come easy, but they come up with a different way of thinking of stuff. So it also makes the ones who really get it easy to kinda slow down and rethink and then they can also teach. So, the best way that we know as teachers if a student can teach it, they really have a material down. So we do allow our students that excel to kinda step back sometimes and help the other students and kind of a win-win for both.

* __Christi__: With the collaboration it is nice for the lower level students to be able to speak to somebody middle ranger or higher, and bounce ideas off. But I also think that the higher level thinkers they benefit from the lower students just because, they bring in a different idea. So I think they feel more comfortable with each other and they're able to talk to each other. At the school I was at, I had to push in and it was my first year of teaching. I didn't know the math curriculum very well. And I was hoping that they would help out more and kind of lead me a little bit or share some of their knowledge. And I think from that experience it led me to, wanna co-teach and be part of it just because two brains are better than one.

* __Tanya__: For the regular ed students, some of them need that additional support. And sometimes I can pick out the regular students that they might wanna consider some additional supports for additional services as well. And they can ask for, they can ask me for my input too the regular teachers can as well. I like seeing how different teachers teach. Like that's what a benefit I've gotten out of Whittier. Oh that's really cool, I wanna try that because we don't get to go out and see other teachers, how they teach and just sit and watch them sometimes. And it's just, it's built some good relationships between the departments that we've worked with, with this. Because they, sometimes have a different perspective on special ed. And then once you're able to kinda see how we work and see what it looks like, it kind of helps them understand, how that department works and how we are there to help them as teachers and help their students settle in their classroom as well.

* __Aj__: As a special ed teacher, you're coming in and not knowing the material as well as a co-teacher 'cause they've taught it for years or that's all they have. It's depending on how comfortable I am with the material, I jump in more, I teach or most of the time I kinda sit back and kinda think about questions that I can ask to kinda help in particular my students are not even if they're special or just kind of struggling students what kind of questions should they be asking, that they probably don't feel comfortable asking themselves. And I'll raise my hand and ask those questions. They're kind of my main role, and going around and kinda observing what they're doing with their work and kinda seeing if they need help and trying to be in their voice.

* __LeeAnna__: I think the advice that I can give, when it comes to co-teaching is just to have that growth mindset and to give it a try. It's scary and a little overwhelming at first. There's still a little hesitation with some here but we've come a long way in the time that I've been here. But once you get there, you don't wanna ever lose it. And so even when we have all of our supports with our reading teachers coming in and our ELL and our SPED it's just nice because anytime we see each other in the hall, we're able to say, "hey, this is what I worked on, this is what I saw with the gains". And we've seen student achievement rise with all of these kids in growth. And our main focus is always growth. And to be able to have that language and that conversation with a variety of teachers, and we're all seeing the same thing. it's been really powerful for us when we see our scores slowly rising. And it's not all about test scores but it is nice to have that visual to say, this is working. So that when we're going this is a little extra work, we have to make sure we're making time with other people. But at the same time we have that benefit of knowing all the great things that are coming out of it. And these students are feeling like they belong and they love being in their natural setting, their classroom. And for them to know they're not gonna leave and they don't have to leave. And they see a variety of students rotating between the groups. They don't know any different. They think that's just a part of how teaching works. And so it's been really cool to see that it happened here.

</details>

<br>

--> H5P Drag and Drop hier mit der Tabelle zum Zuordnen.

| for students                                                           | for teachers |
| ---------------------------------------------------------------------- |:------------:|
| children are not feeling labeld and excluded, excluded, peer teaching, different strategies, flexible groups |     better understanding of the materials, flexible groups, different strategies,      |

## YT H5P Embedding Beispiele

YT Playlist
---

<iframe style="width: 100%; aspect-ratio: 16 / 9; margin-top: 10px " src="https://www.youtube.com/embed/videoseries?si=_pLFHznqfxMOQz3O&amp;list=PLCDsTyftAA2D_buI_Rti5phLZ1DdFsAMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

H5P HTML hosted
---

<iframe style="width: 100%; aspect-ratio: 16 / 9; margin-top: 10px " src="https://euniwell.de.cool/wp-content/uploads/liascript/h5p/1.html" title="H5P" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<br>
<br>

H5P HTML embedded
---
<!-- 
persistent: true
-->

@[h5p_embed(16 / 10)](https://euniwell.de.cool/wp-content/uploads/liascript/h5p/1.html)





